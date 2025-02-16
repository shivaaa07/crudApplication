import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import userRouters from "./routes/user.routes.js";
import { FILE_LIMIT } from "./constants.js";

const app = express();

// const corsOptions = {
//   origin: "http://localhost:5173/",
//   methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
//   credentials: true,
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use(cors());
app.use(express.json({ limit: FILE_LIMIT }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: FILE_LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", userRouters);

export default app;
