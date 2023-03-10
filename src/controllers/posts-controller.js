import {
	addPostDB,
	getPostsDB,
	deletePostDB,
	updatePostDB,
} from '../repositories/posts-repository.js';
import getMetaData from 'metadata-scraper';

export async function newPost(req, res) {
	const userId = res.locals.userId;

	const { link, content } = req.body;

	try {
		const data = await getMetaData(link);
		const metaTitle = data.title;
		const metaImage = data.image;
		const metaDesc = data.description;

		const props = { userId, link, content, metaTitle, metaImage, metaDesc };

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

export async function deletePost(req, res) {
	const { id } = req.params;
	try {
		await deletePostDB(id);
		res.sendStatus(204);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
}

export async function updatePost(req, res) {
	const { id } = req.params;
	const { content } = req.body;
	if (content == '')
		return res.status(404).send({ message: 'Can not be empty' });

	try {
		await updatePostDB(content, id);
		res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
}
