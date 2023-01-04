import get_hashtag_ranking_list from "../repositories/hashtag-ranking-repository.js"

export default async function get_hashtag_ranking(req,res){

    try{
        const hashtag_ranking_list = await get_hashtag_ranking_list()

        res.send(hashtag_ranking_list)
    }catch(error){
        console.log(error)
    }
}