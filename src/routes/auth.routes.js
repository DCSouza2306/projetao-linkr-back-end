import { Router } from "express";
import { userSchema } from "../models/Users";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), createUser);

router.post("/");

export default router;
