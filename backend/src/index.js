import dotenv from "dotenv";
import { mongoDB_Connection } from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

mongoDB_Connection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `The Backend Server is Running at this Host : http://localhost:${process.env.PORT}/api/v1/allUser`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB Not Connected!", error);
    throw error();
  });
