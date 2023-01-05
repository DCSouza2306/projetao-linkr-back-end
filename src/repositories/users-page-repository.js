import db from "../database/db.js";
export async function get_user_page_data(id, req, res) {
  try {
    const posts = await db.query(
      ` SELECT users.id, users.name, users."url-image", posts.id AS "post-id", posts."user-id", posts.link, posts.content 
      FROM users JOIN posts ON users.id = posts."user-id" WHERE users.id=$1`,
      [id]
    );

    if (posts.rowCount === 0) {
      const user = await db.query(
        `
 SELECT users.name, users."url-image" FROM users WHERE id=$1`,
        [id]
      );
      if (user.rowCount === 0) {
        return "User not found";
      }
      return user.rows[0];
    }

    res.send(posts.rows);
  } catch (error) {
    res.send(error);
  }
}
