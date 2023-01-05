import { Router } from "express";
import { userSchema, loginSchema } from "../models/users-schema.js";
import { createUser } from "../controllers/users-controller.js";
import { validateSchema } from "../middlewares/validate-schema-middleware.js";
import { signIn } from "../controllers/auth-controller.js";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), createUser);

router.post("/", validateSchema(loginSchema), signIn);

export default router;
