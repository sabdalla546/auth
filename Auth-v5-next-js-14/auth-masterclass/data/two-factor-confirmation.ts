import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userid: string) => {
  try {
    const twoFactorTokenConfirmation =
      await db.twoFactowConfirmation.findUnique({
        where: {
          userid,
        },
      });

    return twoFactorTokenConfirmation;
  } catch {
    return null;
  }
};
