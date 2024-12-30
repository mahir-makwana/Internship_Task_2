const { z } = require("zod");

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must be at most 255 characters" }),

  address: z
    .string({
      required_error: "Address is required",
    })
    .min(10, { message: "Address must be at least 10 characters" })
    .max(255, { message: "Address must be at most 255 characters" }),

  education: z.object({
    school: z
      .string({ required_error: "School is required" })
      .min(3, { message: "School name must be at least 3 characters" })
      .max(255, { message: "School name must be at most 255 characters" }),
    degree: z
      .string({ required_error: "Degree is required" })
      .min(3, { message: "Degree must be at least 3 characters" })
      .max(255, { message: "Degree must be at most 255 characters" }),
    year: z
      .number({
        required_error: "Graduation year is required",
      })
      .min(1900, { message: "Year must be after 1900" })
      .max(2100, { message: "Year must be before 2100" }),
  }),

  contact: z.object({
    phone: z
      .string({ required_error: "Phone is required" })
      .min(10, { message: "Phone number must be at least 10 characters" })
      .max(15, { message: "Phone number must be at most 15 characters" }),

    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Email is not valid" }),

    github: z
      .string({
        required_error: "GitHub URL is required",
      })
      .url({ message: "GitHub URL is not valid" }),

    linkedin: z
      .string({
        required_error: "LinkedIn URL is required",
      })
      .url({ message: "LinkedIn URL is not valid" }),
  }),
});

module.exports = { formSchema };
