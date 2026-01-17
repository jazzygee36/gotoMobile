import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const individualSchema = z.object({
  businessName: z.string().min(3, "Business name is required"),
  password: z.string().min(3, "Password is required"),
  phoneNumber: z.string().min(3, "Phone number name is required"),
  email: z.string().email("Invalid email address"),
});
