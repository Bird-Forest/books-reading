import { object, string } from "zod"
 
export const signUpSchema = object({
  name: string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .min(2, "Name must be more than 2 characters")
    .trim(),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email")
    .trim(),
  pwd: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .trim(),
  confirmPwd: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .trim()
}).refine(data => data.pwd === data.confirmPwd, {
  message: "Passwords do not match",
  path: ["confirmPwd"], // path to show the error message
});
 
export type FormStateUp =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        pwd?: string[]
        confirmPwd?: string[]
      }
      message?: string
    }
    | undefined
  

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email")
    .trim(),
  pwd: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .trim()
})
export type FormStateIn =
  | {
      errors?: {
        email?: string[]
        pwd?: string[]
      }
      message?: string
    }
    | undefined
  

//     export type FormState =
//   | {
//       errors?: {
//         name?: string[]
//         email?: string[]
//         password?: string[]
//       }
//       message?: string
//     }
//   | undefined