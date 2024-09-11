import mongoose, { Model } from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { IUser } from "@/types/user";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pwd: { type: String },
    confirmPwd: String ,
  },
  { versionKey: false, timestamps: true }
);

let User: Model<IUser>;

const initializeUserModel = async () => {
  await connectDB();
  User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
};

export { initializeUserModel, User };


// import mongoose, { Model } from "mongoose";
// import { connectDB, uri } from "@/lib/mongodb";
// import { IUser } from "@/types/user";
// import { Connection } from "mongoose";

// const userSchema = new mongoose.Schema<IUser>(
//   {
//     googleEmail: { type: String},
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     pwd: { type: String },
//     confirmPwd: { type: String },
//   },
//   { versionKey: false, timestamps: true }
// );

// let User: mongoose.Model<IUser>;

// const initializeUserModel = async () => {
//   await connectDB();
//   User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
//   // User = mongoose.model<IUser>("User", userSchema);
// };
// initializeUserModel().catch(console.error);

// export { initializeUserModel, User };
  
//   // Создаем подключение
// const connection = mongoose.connect(uri as string);

// // Создаем модель пользователя
// export const User: Model<IUser> = connection.model<IUser>("User", userSchema);

// export { User };



// import { uri } from "@/lib/mongodb";
// import { IUser } from "@/types/user";
// import mongoose, { Model, Schema } from "mongoose";

// const userSchema = new mongoose.Schema<IUser>(
//   {
//     googleEmail: String,
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, },
//     pwd: { type: String, },
//     confirmPwd: String,
//   },
//   { versionKey: false, timestamps: true }
// );


// const userSchema = new mongoose.Schema<IUser>(
//   {
//     googleEmail: { type: String, unique: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, },
//     pwd: { type: String, },
//     confirmPwd: { type: String, },
//   },
//   { versionKey: false, timestamps: true }
// );


// const connection = mongoose.createConnection(uri as string);
// export const User = connection.model("User", userSchema);


// import { uri } from "@/lib/mongodb";
// import { IUser } from "@/types/user";
// import mongoose, { Schema, Model, Connection } from "mongoose";


// // Создаем схему пользователя
// const userSchema: Schema<IUser> = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, },
//     pwd: { type: String, required: true },
//   },
//   { versionKey: false, timestamps: true }
// );

// // Создаем подключение
// const connection: Connection = mongoose.createConnection(uri);

// // Создаем модель пользователя
// export const User: Model<IUser> = connection.model<IUser>("User", userSchema);
