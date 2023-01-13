import db from "../database/db.js";
export async function get_user_page_data(id, req, res) {
  try {
    const posts = await db.query(
      ` SELECT posts.id, posts.link, posts.content, users.id AS "userId", users.name, users."url-image" AS "urlImage",
      posts."meta-title" AS "metaTitle", posts."meta-description" AS "metaDesc", posts."meta-image" AS "metaImage"
      FROM posts
      JOIN users
      ON posts."user-id" = users.id
      WHERE users.id = $1
      ORDER BY posts.id DESC
      LIMIT 20
      ;`, [id]
    );

    if (posts.rowCount === 0) {
      const user = await db.query(
        ` SELECT posts.id, posts.link, posts.content, users.id AS "userId", users.name, users."url-image" AS "urlImage",
        posts."meta-title" AS "metaTitle", posts."meta-description" AS "metaDesc", posts."meta-image" AS "metaImage"
        FROM posts
        JOIN users
        ON posts."user-id" = users.id
        WHERE users.id = $1
        ORDER BY posts.id DESC
        LIMIT 20
        ;`, [id]
      );
      if (user.rowCount === 0) {
        return "User not found";
      }
      return user.rows;
    }

    res.send(posts.rows);
  } catch (error) {
    res.send(error);
  }
}
