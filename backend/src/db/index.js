import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants.js";

const mongoDB_Connection = async () => {
  try {
    const mongoDB_instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${MONGODB_NAME}`
    );
    console.log(
      `The MongoDB Server is Running at this Host : ${mongoDB_instance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection Failed!!", error);
    throw error();
  }
};

export { mongoDB_Connection };
