import db from '../database/db.js';

export async function addPostDB(props) {
	const { userId, link, content, metaTitle, metaImage, metaDesc } = props;
	return db.query(
		`
        INSERT INTO posts ("user-id", link, content, "meta-title", "meta-description", "meta-image")
        VALUES ($1, $2, $3, $4, $5, $6);
        `,
		[userId, link, content, metaTitle, metaImage, metaDesc]
	);
}

export async function getPostsDB() {
	return db.query(`
	SELECT posts.id, posts.link, posts.content, users.id AS "userId", users.name, users."url-image" AS "urlImage",
	posts."meta-title" AS "metaTitle", posts."meta-description" AS "metaDesc", posts."meta-image" AS "metaImage"
	FROM posts
	JOIN users
	ON posts."user-id" = users.id
	ORDER BY posts.id DESC
	LIMIT 20;
	`);
}

export async function getPostByIdDB(id) {
	return db.query(`SELECT * FROM posts WHERE id = $1 `, [id]);
}

export async function deletePostDB(id) {
	return db.query(`DELETE FROM posts WHERE id = $1 `, [id]);
}

export async function updatePostDB(body, id) {
	return db.query(`UPDATE posts SET content = $1 WHERE id = $2`, [body, id]);
}
