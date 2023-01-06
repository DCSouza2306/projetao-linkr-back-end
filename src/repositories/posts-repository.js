import db from "../database/db.js";

export async function addPostDB(props) {
  const { userId, link, content } = props;
  return db.query(
    `
        INSERT INTO posts ("user-id", link, content)
        VALUES ($1, $2, $3);
        `,
    [userId, link, content]
  );
}

export async function getPostsDB() {
  return db.query(`
		SELECT *
		FROM posts;
	`);
}

export async function getPostByIdDB(id) {
  return db.query(`SELECT * FROM posts WHERE id = $1 `, [id]);
}

export async function deletePostDB(id) {
  return db.query(`DELETE FROM posts WHERE id = $1 `, [id]);
}

export async function updatePostDB(body, id){
  return db.query(`UPDATE posts SET content = $1 WHERE id = $2`,[body, id])
}
