import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, "Enter a valid name."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  name: z.string().min(3, "Enter a valid name."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  checkbox: z.boolean().nullable(),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
