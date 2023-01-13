import db from "../database/db.js";

export async function postFollowerDB(idFollowed, idFollower) {
  return db.query(
    `
      INSERT INTO follows ("follower-id", "followed-id") VALUES ($1, $2);
    `,
    [idFollower, idFollowed]
  );
}

export async function findFolloweds(idFollowed){
    return db.query(`
    SELECT * FROM follows WHERE "followed-id" = $1;
    `,[idFollowed]);
}

export async function deleteFollowedDB(idFollowed){
    return db.query(`
    DELETE FROM follows WHERE "followed-id" = $1
    `,[idFollowed])
}

export async function getFollowingDB(idFollower){
  return db.query(`
  SELECT * FROM follows WHERE "follower-id" = $1
  `,[idFollower])
}