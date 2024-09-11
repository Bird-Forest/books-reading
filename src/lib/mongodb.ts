import mongoose, { ConnectOptions } from "mongoose";

export const uri: string | undefined = process.env.MONGODB_URI;

const clientOptions: ConnectOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export const connectDB = async (): Promise<void> => {
  try {
    if (!uri) {
      throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(uri, clientOptions);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// import mongoose, { ConnectOptions } from "mongoose";

// export const uri: string | undefined = process.env.MONGODB_URI;

// const clientOptions: ConnectOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// export const connectDB = async (): Promise<void> => {
//   try {
//     if (!uri) {
//       throw new Error("MongoDB URI is not defined");
//     }
//     await mongoose.connect(uri, clientOptions);
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };



// import mongoose, { ConnectOptions } from "mongoose";

// export const uri: string | undefined = process.env.MONGODB_URI;

// const clientOptions: ConnectOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// export const connectDB = async (): Promise<void> => {
//   try {
//     if (!uri) {
//       throw new Error("MongoDB URI is not defined");
//     }
//     const { connection } = await mongoose.connect(uri, clientOptions);
//     if (connection.readyState === 1) {
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };




// import mongoose, { ConnectOptions } from "mongoose";

// export const uri: string | undefined = process.env.MONGODB_URI;

// const clientOptions: ConnectOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// export const connectDB = async (): Promise<void> => {
//   try {
//     if (!uri) {
//       throw new Error("MongoDB URI is not defined");
//     }
//     const { connection } = await mongoose.connect(uri, clientOptions);
//     if (connection.readyState === 1) {
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// import mongoose from "mongoose";

// export const uri = process.env.MONGODB_URI;

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// export const connectDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(uri, clientOptions);
//     if (connection.readyState === 1) {
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//       return Promise.resolve(true);
//     }
//   } catch (error) {
//     console.error(error);
//     return Promise.reject(error);
//   }
// };
// import mongoose from "mongoose";

// export const uri: string | undefined = process.env.MONGODB_URI;

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// export const connectDB = async (): Promise<boolean> => {
//   try {
//     if (!uri) {
//       throw new Error("MongoDB URI is not defined");
//     }
//     const { connection } = await mongoose.connect(uri, clientOptions);
//     if (connection.readyState === 1) {
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//       return Promise.resolve(true);
//     }
//   } catch (error) {
//     console.error(error);
//     return Promise.reject(error);
//   }
// };