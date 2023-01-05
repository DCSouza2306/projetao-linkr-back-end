import db from "../database/db.js"

export async function getHashtagRankingList() {
    try {

        return db.query(`SELECT "hashtag-id", COUNT(*) as count FROM "posts-hashtags" GROUP BY "hashtag-id" ORDER BY count DESC LIMIT 10`)

    } catch (error) {
        console.log(error)
    }
}

export async function getHashtagPotsList(hashtag) {
    try {
        return db.query(`SELECT posts.*, hashtags.name FROM
                             posts JOIN "posts-hashtags" ON posts.id="posts-hashtags"."post-id"
                             JOIN hashtags ON hashtags.id="posts-hashtags"."hashtag-id"
                             WHERE hashtags.name=($1) `,[hashtag])
    } catch (error) {
        console.log(error)
    }
}


