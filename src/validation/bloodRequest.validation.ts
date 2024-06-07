import { z } from "zod";

export const donationRequestSchema = z.object({
  donorId: z
    .string()
    .uuid()
    .min(1, { message: "Donor ID is required and must be a valid UUID." }),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must contain 11 digits." }),
  dateOfDonation: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date of donation must be in the format YYYY-MM-DD.",
  }),
  hospitalName: z.string().min(1, { message: "Hospital name is required." }),
  hospitalAddress: z
    .string()
    .min(1, { message: "Hospital address is required." }),
  reason: z.string().min(1, { message: "Reason for donation is required." }),
});
