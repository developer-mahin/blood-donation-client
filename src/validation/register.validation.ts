import { z } from "zod";

export const registerValidation = z
  .object({
    name: z.string().min(1, "Please Enter Your Name"),
    email: z.string().email("Please enter valid email address!"),
    blood: z.string().min(1, "Please enter valid email address!"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    location: z.string().min(1, "Please Enter Location"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  location: "",
  blood: "",
};
