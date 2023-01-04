import { findUserByEmail, insertUser } from "../repositories/users.repository.js";
import bcrypt from 'bcrypt'

export async function createUser(req, res) {
  const { name, email, password, urlPicture } = req.body;

  try {
    const userExist = await findUserByEmail(email);

    if (userExist.rowCount > 0) {
      return res.status(409).send({ message: "Email já cadastrado" });
    }

    const passwordHash = bcrypt.hash(password, 10);

    await insertUser(name, email, passwordHash, urlPicture);

    res.sendStatus(201);

  } catch (e) {
    res.status(500).send(e.message);
  }
}
