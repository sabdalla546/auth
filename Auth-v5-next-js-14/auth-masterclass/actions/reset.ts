"use server";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedField = ResetSchema.safeParse(values);
  if (!validatedField.success) {
    return { error: "invild email" };
  }
  const { email } = validatedField.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "email not exist" };
  }
  // generate token and sen email
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "reset email send" };
};
