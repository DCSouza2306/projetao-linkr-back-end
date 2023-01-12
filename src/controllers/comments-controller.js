import { getPostByIdDB } from "../repositories/posts-repository.js";
import { insertComment } from "../repositories/comments-repository.js";

export async function postComment(req, res) {
  const commenterId = res.locals.userId;
  const { id: postId } = req.params;
  const { comment } = req.body;

  if (comment === "") {
    return res.status(400).send({ message: "Comment must be filled in" });
  }

  try {
    const post = await getPostByIdDB(postId);

    if (post.rowCount === 0)
      return res.status(404).send({ message: "Post does not exist" });

    await insertComment(commenterId, postId, comment);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
