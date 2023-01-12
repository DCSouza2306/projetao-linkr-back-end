export async function validatePostid(req,res,next){
    const postId = req.params.postId

    if(!postId || isNaN(postId)){
        return res.sendStatus(400)
    }

  next()
}