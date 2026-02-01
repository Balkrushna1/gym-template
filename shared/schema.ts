import { z } from "zod";

export const insertContactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  interestedIn: z.string().optional(), // e.g. Personal Training, Class, Membership
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
