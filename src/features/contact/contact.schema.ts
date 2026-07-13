import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters."),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number."),

  service: z
    .string()
    .min(1, "Please select a service."),

  message: z
    .string()
    .trim()
    .min(10, "Please describe your issue in at least 10 characters.")
    .max(500, "Message cannot exceed 500 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;