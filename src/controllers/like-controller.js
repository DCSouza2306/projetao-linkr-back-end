import { deleteLike, getLikes, like, postLike } from "../repositories/like-repository.js"

export async function postLikeDatabase(req,res){
    const userId = res.locals.userId
    const postId = req.params.postId

    try{
        await postLike({userId, postId})
        res.sendStatus(200)
    }catch(error){
        console.log(error)
    }
}

export async function deleteLikeDatabase(req,res){
    const userId = res.locals.userId
    const postId = req.params.postId

    try{
        await deleteLike({userId, postId})
        return res.sendStatus(200)
    } catch(error){
        console.log(error)
    }
}

export async function getLikesDatabase(req,res){
    const postId = req.params.postId

    console.log(postId)

    try{
        const totalLikes =  (await getLikes({postId})).rows
        return res.send(totalLikes)
    }catch(error){
        console.log(error)
    }

}

export async function isLiked(req,res){
    const userId = res.locals.userId

    try{
        const isLiked = (await like({userId})).rows

        return res.send(isLiked).rows
    }catch(error){
        console.log(error)
    }
}