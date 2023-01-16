import db from "../../database/db.js";

export async function getHashtagRankingList() {
  try {
    return db.query(
      `SELECT "hashtag-id", COUNT(*) as count FROM "posts-hashtags" GROUP BY "hashtag-id" ORDER BY count DESC LIMIT 10`
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getHashtagsNamesDB(){
    try{
       return db.query(`
        SELECT name FROM hashtags
        `)
    } catch(e){
        console.log(e)
    }
}

export async function getHashtagPotsList(hashtag) {
  try {
    return db.query(
      `SELECT posts.*, hashtags.name FROM
                             posts JOIN "posts-hashtags" ON posts.id="posts-hashtags"."post-id"
                             JOIN hashtags ON hashtags.id="posts-hashtags"."hashtag-id"
                             WHERE hashtags.name=($1) `,
      [hashtag]
    );
  } catch (error) {
    console.log(error);
  }
}

export async function postHashtagListDB(postId, hashtagId) {
  try {
    return db.query(
      `
        INSERT INTO "posts-hashtags" ("post-id","hashtag-id") VALUES ($1, $2)
        `,
      [postId, hashtagId]
    );
  } catch (e) {
    console.log(e);
  }
}

export async function getHashtagsId(hashtagName) {
  try {
    return db.query(
      `
            SELECT id FROM hashtags WHERE name = $1
        `,
      [hashtagName]
    );
  } catch (e) {
    console.log(e);
  }
}

export async function postHashtagDB(hashtag) {
  try {
    return db.query(
      `
            INSERT INTO hashtags (name) VALUES ($1)
        `,
      [hashtag]
    );
  } catch (e) {
    console.log(e);
  }
}

export async function getHashtagsIdAndPostId(hashtagId, postId){
    try{
        return db.query(`
            SELECT * FROM "posts-hashtags" WHERE "post-id" = $1 AND "hashtag-id" = $2
        `,[postId, hashtagId])
    } catch(e){
        console.log(e);
    }
}
