import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { findUserByEmail } from "../repositories/users.repository.js";

export async function signIn(req, res) {
  const { email, password } = req.body;

  const { rows: user } = await findUserByEmail(email);

  if (!user) {
    return res.status(401).send({ message: "Invalid email or password" });
  }

  if (bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
      expiresIn: 86400,
    });
    return res.send(token);
  }

  res.status(401).send({message: "Invalid email or password" })
}
