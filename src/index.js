import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import users_pages from "./routes/users-page-routes.js";
import users_find_name from "./routes/users-find-by-name-routes.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(json());
app.use(users_pages);
app.use(users_find_name);

app.listen(4000, () => console.log("server running"));
