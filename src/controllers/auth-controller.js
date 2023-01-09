import bcrypt from "bcrypt";
import { findUserByEmail } from "../repositories/users-repository.js";
import jwt from "jsonwebtoken";

export async function signIn(req, res) {
  const { email, password } = req.body;

  const { rows: users } = await findUserByEmail(email);
  const [user] = users

  if (!user) {
    return res.status(401).send({ message: "Invalid email or password" });
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
      expiresIn: 86400,
    });


    return res.send({
      token,
      urlImage: user["url-image"],
      userId: user.id
    });
  }

  res.status(401).send({ message: "Invalid email or password" });
}
