"use server";

import { initializeUserModel, User } from "@/models/user";
import { IUser } from "@/types/user";
import { signUpSchema, FormStateUp, signInSchema, FormStateIn } from '@/lib/zod';
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { NextApiResponse } from 'next';
import { resolve } from "path";

export async function registerUser(state: FormStateUp, formData: FormData) {
  const { name, email, pwd, confirmPwd } = Object.fromEntries(formData.entries()) as unknown as IUser;

  const validatedFields = signUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    pwd: formData.get('pwd'),
    confirmPwd: formData.get('confirmPwd'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await initializeUserModel(); // Убедитесь, что подключение установлено
    const user = await User.findOne({ email }).exec();
    if (user) {
      return {
        message: "You are already registered",
      };
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pwd as string, salt);

    const newUser = await User.create({ name, email, pwd: hash });
    const data = JSON.parse(JSON.stringify( newUser));
    // console.log("Action", data);
      // res.writeHead(303, { Location: '/liba' });
      // res.end();
    return data;
    
  } catch (e) {
    console.log("Action", e);
    return {
      message: "No access",
    };
  }
}

export async function loginUser(state: FormStateIn, formData: FormData) {
  const { email, pwd } = Object.fromEntries(formData.entries()) as unknown as IUser;
  
  const validatedFields = signInSchema.safeParse({
    email: formData.get('email'),
    pwd: formData.get('pwd'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await initializeUserModel(); // Убедитесь, что подключение установлено

    const user = await User.findOne({ email }).exec();

    if (!user) {
      return {
        message: "You are not registered"
      };
    }

    const pwdCompare = await bcrypt.compare(pwd, user.pwd);
    if (!pwdCompare) {
      return {
        message: "Email or password is wrong"
      }
    }
    const data = JSON.parse(JSON.stringify(user));

    const credentials = {
       name: user.name,
       email: user.email,
     };

    signIn("credentials", credentials)
    
    console.log("Action", data);
    //  if (user) {
    //    redirect('/liba')
    // }
     redirect('/liba')
    
  } catch (e) {
    console.log("Action", e);
    return {
      message: "No access",
    };
  }
 
}

// export async function registerUser(state: FormStateUp, formData: FormData) {
//   const { name, email, pwd, confirmPwd } = Object.fromEntries(formData.entries()) as unknown as IUser;

//   const validatedFields = signUpSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     pwd: formData.get('pwd'),
//     confirmPwd: formData.get('confirmPwd'),
// })
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }
//   try {
//     await initializeUserModel()
//     const user = await User.findOne({ email}).exec();

//     if (user) {
//         return {
//         message: "You are already registered",
//       };
//     }
//     const saltRounds = 10;
//     const salt = bcrypt.genSaltSync(saltRounds);
//     const hash = bcrypt.hashSync(pwd as string, salt);

//     const newUser = await User.create({ name, email, pwd: hash });
//     return {
//       message: "Success",
//     };
//   } catch (e) {
//     console.log("Action", e);
//     return {
//       message: "No access",
//     };
//   }
// }



// export interface ILoginResponse {
//   user?: IUser;
//   message?: string;
// }

// export async function loginUser({ email, pwd }: { email: string; pwd: string }): Promise<ILoginResponse>{
//   try {
//     await initializeUserModel(); 
//     const user = await User.findOne({ email }).exec();
//     console.log("USER", user)

//     if (!user) {
//       return {
//         message: "You are not registered"       
//       }
//     }
//     const pwdCompare = await bcrypt.compare(pwd, user.pwd);
//       if (!pwdCompare) {
//         return {
//           message: "Email or password is wrong"
//         }
//     }

    
//     const data: IUser = {
//       name: user.name,
//       email: user.email,
//       pwd: user.pwd,
//       confirmPwd: user.confirmPwd
//     };

//     return { user: data };
//     // return user
    
//   } catch (e) {
//     console.log("Action", e);
//     return {
//       message: "No access",
//     };
//   }
// }
