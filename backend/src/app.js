import express from "express";
import cookieParser from "cookie-parser";
import { FILE_LIMIT } from "./constants.js";
import userRouters from "./routes/user.routes.js";

const app = express();

app.use(express.json({ limit: FILE_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: FILE_LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", userRouters);

export default app;
