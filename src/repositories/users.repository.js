import db from "../database/db.js";

export async function findUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

export async function insertUser(name, email, password, urlImage) {
  return db.query(
    `
    INSERT INTO users (email, password, name, url-image)
    VALUES ($1, $2, $3, $4)
    `,
    [email, password, name, urlImage]
  );
}
