import { getPostByIdDB } from "../repositories/posts-repository.js";
import {
  insertComment,
  getCommentsById,
  commentCounts
} from "../repositories/comments-repository.js";

export async function postComment(req, res) {
  const commenterId = res.locals.userId;
  const { id: postId } = req.params;
  const { comment } = req.body;

  try {
    if (comment == "") {
      return res.status(400).send({ message: "Comment must be filled in" });
    }
    await insertComment(commenterId, postId, comment);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getComments(req, res) {
  const { id: postId } = req.params;
  try {
    const {rows} = await getCommentsById(postId);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getCommentsCount(req, res){
  try{
  const countComments = await commentCounts();

  res.send(countComments.rows)

  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
