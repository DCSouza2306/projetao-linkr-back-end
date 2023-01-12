import db from "../database/db.js";

export async function insertComment(commenterId, postId, comment){
    return await db.query(`
    INSERT INTO comments
    ("commenter-id", "post-id", comment)
    VALUES($1,$2,$3)`,[commenterId, postId, comment])
}

export async function getCommentsById(posId){
    return await db.query(`
    SELECT users.name, comments.comment, comments."post-id", users."url-image" FROM comments 
    JOIN users
    ON users.id = comments."commenter-id"
    `,)
}