import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, {
    message: "password is required",
  }),
  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z.string().email(),
});
export const NewPasswodSchema = z.object({
  password: z.string().min(6, {
    message: "mimimum 6 characters required",
  }),
});
export const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "minimam 6 characters ",
  }),
});
