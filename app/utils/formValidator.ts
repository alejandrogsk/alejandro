import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
const validator = withZod(
    z.object({
      clientName: z
        .string({required_error: "Name is required"})
        .min(3, { message: "Use at least 3 characters" })
        .max(30, { message: "Use up to 30 characters"}),
      clientLastName: z
        .string({required_error: "Surename is required"})
        .min(3, { message: "Use at least 3 characters" })
        .max(30, { message: "Use up to 30 characters"}),
      clientEmail: z
        .string({required_error: "Email is required"})
        .min(1)
        .max(30)
        .email("Must be a valid email"),
        clientCompany: z
        .string({required_error: "Company is required"})
        .min(3, { message: "Use at least 3 characters" })
        .max(30, { message: "Use up to 30 characters"})
    })
  );

  export default validator;