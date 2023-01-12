import db from "../database/db.js";

export async function insertComment(commenterId, postId, comment){
    return await db.query(`
    INSERT INTO comments
    ("commenter-id", "post-id", comment)
    VALUES($1,$2,$3)`,[commenterId, postId, comment])
}