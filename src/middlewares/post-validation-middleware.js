import { getPostByIdDB } from "../repositories/posts/posts-repository.js";

export async function postValidation(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.userId;

  try {
    const post = await getPostByIdDB(id);

    if (post.rowCount === 0)
      return res.status(404).send({ message: "Post does not exist" });

    if (userId !== post.rows[0]["user-id"])
      return res
        .status(500)
        .send({ message: "post does not belong to this user" });

    next();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function postExist(req, res, next) {
  const { id } = req.params;
  try {
    const post = await getPostByIdDB(id);
    if (post.rowCount === 0)
      return res.status(404).send({ message: "Post does not exist" });
    next()
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
