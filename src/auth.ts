import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import { signInSchema, FormStateIn } from "@/lib/zod"
import { ZodError } from "zod"
// import {IUser} from '@/types/user'
// import { User } from "./models/user";
// import bcrypt from "bcrypt";
// import email from "next-auth/providers/email";
import { loginUser } from "@/services/users";
import {IUser} from '@/types/user'
import email from "next-auth/providers/email";
export interface ILoginResponse {
  user?: IUser;
  message?: string;
}
export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [ Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
  }),
    Credentials({
      credentials: {
        email: {label: 'email', type: 'email', required: true},
        pwd: {label: 'pwd', type: 'pwd', required: true},
      },
      async authorize(credentials, request) {
        try {
          let user = null
 
          const isValidCredentials = await signInSchema.parseAsync(credentials)

          if (!isValidCredentials) {
            throw new Error("User not found.")
          }
          const { email, pwd } = await signInSchema.parseAsync(credentials)

          // user = {email: credentials.email, pwd: credentials.pwd}
          console.log(user)
            
          return await ({email, pwd})
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password)
 
          // logic to verify if the user exists
          // user = await loginUser(email, pwd)
 
          // if (!user) {
          //   throw new Error("User not found.")
          // }
         console.log(user)
          return user
    
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
        
        // if (!credentials?.email || !credentials.pwd) return null;
        
        // let user: IUser | null = null;

        // const response = await loginUser({ email: credentials.email, pwd: credentials.pwd} )
        // console.log(user)

        // if (response.message) {
        //   console.log(response.message);
        //   return null;
        // }

        // return response.user;
      }
    }),],
  
})

        // if (currentUser && currentUser.pwd === credentials.pwd) {
        //   const { password, ...userWithoutPass } = currentUser;

        //   return userWithoutPass as User;
        // }

        // return null
      
        // const { email, pwd } = credentials as { email: string; pwd: string };
        
        // if (!credentials?.email || !credentials.pwd) return null;

        // const currentUser = await User.findOne({ email: credentials.email })
        // console.log(currentUser)
        // return currentUser

        // if (currentUser && currentUser.pwd === credentials.pwd) {
        //   const { password, ...userWithoutPass } = currentUser;

        //   return userWithoutPass as IUser;
        // }

//  try {
//           let user = null
//           const { email, pwd } = await signInSchema.parseAsync(credentials)
//               const validatedFields = signInSchema.safeParse({
//               email: credentials.email,
//               wd: credentials.pwd,
//             })
//           if (!validatedFields.success) {
//                 return {
//             errors: validatedFields.error.flatten().fieldErrors,
//             }
//           }
//           user 
//         } catch (e) {
//           console.log("Action", e);
//           return {
//             message: "No access",
//           };
//         }

// import { JWT } from 'next-auth/jwt';

// interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   image: string;
// }

// async function signIn(user: IUser, account: Account, profile: Profile): Promise<boolean> {
//   await dbConnect();

//   const existingUser = await User.findOne({ googleId: profile.id });
//   if (!existingUser) {
//     const newUser = new User({
//       googleId: profile.id,
//       name: profile.name,
//       email: profile.email,
//     });
//     await newUser.save();
//   }

//   return true;
// }

// async function session(session: Session, user: JWT): Promise<Session> {
//   session.user.id = user.id;
//   return session;
// }
