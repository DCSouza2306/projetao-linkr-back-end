export default async function get_hashtag_ranking_list(){
    try{

        return query("SELECT hashtag-id, COUNT(*) as count FROM posts-hashtag GROUP BY hashtag-id ORDER BY count DESC LIMIT 10")
    }catch(error){
        console.log(error)
    }
}


