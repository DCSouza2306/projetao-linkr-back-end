import { Router } from "express";
import { userSchema, loginSchema } from "../models/Users.js";
import { createUser } from "../controllers/users.controller.js";
import { validateSchema } from "../middlewares/validate.schema.middleware.js";
import { signIn } from "../controllers/auth.controller.js";
import { authValidation } from "../middlewares/auth.validation.middleware.js";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), createUser);

router.post("/", validateSchema(loginSchema), signIn);

router.get("/teste", authValidation)

export default router;
