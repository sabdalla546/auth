"use server";
import * as z from "zod";
import bcryptjs from "bcryptjs";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NewPasswodSchema } from "@/schemas";

export const newPassword = async (
  values: z.infer<typeof NewPasswodSchema>,
  token: string | null
) => {
  if (!token) {
    return { error: "missing token" };
  }
  const validatedField = NewPasswodSchema.safeParse(values);
  if (!validatedField.success) {
    return { error: "invalid password" };
  }
  const { password } = validatedField.data;
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "invalid token" };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "token has expierd" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "email is not exist" };
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordRrsetToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return { success: "password updated" };
};
