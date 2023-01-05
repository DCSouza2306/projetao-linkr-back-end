import jwt from "jsonwebtoken";
import { findUserById } from "../repositories/users-repository.js";

export async function authValidation(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.sendStatus(401);

    const parts = authorization.split(" ");

    if (parts.length !== 2) return res.sendStatus(401);

    const [schema, token] = parts;

    if (schema !== "Bearer") return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Invalid or expired token" });
      }

      const { rows } = await findUserById(decoded.id);

      if (!rows[0]) {
        res.status(404).send({ message: "Can not find user" });
      }

      res.locals.userId = rows[0].id;

      return next();
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
