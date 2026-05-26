import { z } from "zod";

const nameRegex = /^[A-Za-z\s]+$/;
const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

export const bookDemoSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100).regex(nameRegex, "Name should contain only letters"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().regex(phoneRegex, "Please enter a valid phone number"),
  course: z.string().trim().min(1, "Course is required"),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100).regex(nameRegex, "Name should contain only letters"),
  phone: z.string().trim().regex(phoneRegex, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email"),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  interest: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(1000),
});