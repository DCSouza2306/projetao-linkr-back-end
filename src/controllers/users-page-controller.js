import { get_user_page_data } from "../repositories/users-page-repository.js";
import { findUserById } from "../repositories/users-repository.js";
import {
  findFolloweds,
  postFollowerDB,
  deleteFollowedDB
} from "../repositories/follows-repository.js";

export async function getUserPage(req, res) {
  try {
    const { id } = req.params;
    const user_page_data = await get_user_page_data(id, req, res);

    res.send(user_page_data);
  } catch (error) {
    console.log(error);
  }
}

export async function postFollower(req, res) {
  const { id: idFollowed } = req.params;
  const idFollower = res.locals.userId;

  try {
    const userExist = await findUserById(idFollowed);
    if (userExist.rowCount == 0)
      return res.status(404).send({ message: "Can not find user" });

    const alreadyFollow = await findFolloweds(idFollowed);
    if (alreadyFollow.rowCount > 0)
      return res.status(409).send({message:"Yoy already follow this user"});
    
    await postFollowerDB(idFollowed, idFollower);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteFollower(req, res) {
  const { id: idFollowed } = req.params;

  try {
    const isFollowed = await findFolloweds(idFollowed);
    if (isFollowed.rowCount === 0)
      return res
        .status(404)
        .send({ message: "You are not following this user" });

    await deleteFollowedDB(idFollowed);
    res.sendStatus(200)
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
