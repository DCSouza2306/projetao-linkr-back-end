import { addPostDB, getPostsDB } from '../repositories/posts-repository.js';

export async function newPost(req, res) {
	const userId = res.locals.userId;
	const { link, content } = req.body;
	const props = { userId, link, content };

	try {
		await addPostDB(props);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function getPosts(req, res) {
	try {
		const posts = await getPostsDB();
		res.send(posts.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
