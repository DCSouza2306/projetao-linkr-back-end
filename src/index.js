import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index-routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Runing in port ${port}`));
