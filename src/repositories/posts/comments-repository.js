import db from "../../database/db.js";

export async function insertComment(commenterId, postId, comment){
    return await db.query(`
    INSERT INTO comments
    ("commenter-id", "post-id", comment)
    VALUES($1,$2,$3)`,[commenterId, postId, comment])
}

export async function getCommentsById(posId){
    return await db.query(`
    SELECT users.name, users.id AS "commenter-id",r comments.comment, comments."post-id", users."url-image" FROM comments 
    JOIN users
    ON users.id = comments."commenter-id"
    `,)
}

export async function commentCounts(){
    return await db.query(`
    SELECT COUNT (id) as "commentsCount", "post-id" FROM comments GROUP BY "post-id";
    `)
}