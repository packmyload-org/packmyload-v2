import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB is already connected");
    return;
  }
  let URI = process.env.MONGO_URI || ''
  try {
    await mongoose.connect(URI, {
      dbName: "packmyload",
    });

    isConnected = true;
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
}
