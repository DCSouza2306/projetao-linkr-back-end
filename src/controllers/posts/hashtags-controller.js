
import {getHashtagPotsList, getHashtagRankingList} from "../../repositories/posts/hashtag-repository.js"

export async function getHashtagRanking(req,res){

    try{
        const hashtagRankingList = await get_hashtag_ranking_list()
        
        res.send(hashtagRankingList)
    }catch(error){
        console.log(error)
    }
}

export async function getHashtagPosts(req,res){
    const hashtag = req.params.hashtag

    try{
        const hashtagPostsList = await getHashtagPotsList(hashtag)
        res.send(hashtagPostsList)
        return(hashtagPostsList)
    }catch(error){
        console.log(error)
    }

   
}