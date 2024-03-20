import { z } from "zod";

export const FormSchema = z.object({
  userId: z.string(),
  name: z.string().min(8, {
    message: "Name must be at least 8 characters long.",
  }),
  category: z.string({
    required_error: "You need to choose a category",
  }),
  url: z.string().url({
    message: "Not a valid url type",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters long.",
  }),
});

export const taskSchema = z.object({
  id: z.string(),
  username: z.string(),
  title: z.string(),
  status: z.string(),
  tech_stack: z.string(),
  priority: z.string(),
  userId: z.string(),
});

export const userAuthSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "You've not specified an email or not a valid email",
    }),
  // name: z
  //   .string({
  //     required_error: "Names are required",
  //   })
  //   .min(6, {
  //     message: "Names too short - should be 6 chars minimum",
  //   }),

  // password: z
  //   .string({
  //     required_error: "Password is required",
  //   })
  //   .min(8, {
  //     message: "Password too short - should be 8 chars minimum",
  //   }),
});

export const categorySchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(4, {
      message: "Name too short - should be 4 chars minimum",
    }),
  icon: z.string(),
  userId: z.string(),
});

export const DeleteConfirmation = z.object({
  confirmation: z.string({
    required_error: "Confirmation is required",
  }),
});

export type Task = z.infer<typeof taskSchema>;
