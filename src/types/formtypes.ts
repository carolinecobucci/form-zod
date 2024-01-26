import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, "Enter a valid name."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
