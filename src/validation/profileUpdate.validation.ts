import { z } from "zod";

const userProfileSchema = z.object({
  age: z.string().min(1, { message: "Age is required" }),
  contactNumber: z.string().min(1, { message: "Contact number is required" }),
  bio: z.string().min(1, { message: "Bio is required" }),
});

export const profileUpdateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  userProfile: userProfileSchema,
});
