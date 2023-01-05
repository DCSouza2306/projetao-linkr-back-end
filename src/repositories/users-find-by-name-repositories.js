import { connection } from "../database/db.js";

export async function find_user_by_name_data(name, req, res) {
  try {
    if (!name || name === "") {
      return "User not found";
    }
    const result = await connection.query(
      ` SELECT users.id, users.name, users."url-image" FROM users WHERE users.name ILIKE '%'|| $1 ||'%' `,
      [name]
    );

    if (result.rowCount === 0) {
      return "User not found";
    }

    console.log(result);

    return result.rows;
  } catch (error) {
    res.send(error);
  }
}
