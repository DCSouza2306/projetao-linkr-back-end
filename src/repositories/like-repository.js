import db from "../database/db.js";


export function postLike({userId, postId}){
    return db.query(`INSERT INTO likes ("user-id","post-id") VALUES ($1,$2)`,[userId, postId])
}

export function deleteLike({userId, postId}){
    return db.query(`DELETE FROM likes WHERE "user-id"=$1 AND "post-id"=$2`,[userId, postId])
}

export function getLikes({postId}){
    return db.query(`SELECT COUNT(*) as "totalLikes",posts.id FROM likes JOIN posts ON likes."post-id"=posts.id GROUP BY posts.id`)
}

export function like({userId}){
    return db.query(`SELECT "user-id" as userid, "post-id" as postId FROM likes WHERE "user-id"=$1`, [userId])
} 