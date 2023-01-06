import db from '../database/db.js';

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
	SELECT posts.id, posts.link, posts.content, users.id AS "userId", users.name, users."url-image" AS "urlImage"
	FROM posts
	JOIN users
	ON posts."user-id" = users.id
	ORDER BY posts.id DESC;
	`);
}
