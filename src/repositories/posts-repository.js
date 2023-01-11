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
		SELECT *
		FROM posts;
	`);
}
