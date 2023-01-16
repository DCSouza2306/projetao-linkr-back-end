import {
  getHashtagPotsList,
  getHashtagsNamesDB,
  getHashtagRankingList,
  postHashtagListDB,
  getHashtagsId,
  postHashtagDB,
  getHashtagsIdAndPostId,
} from "../../repositories/posts/hashtag-repository.js";

export async function getHashtagRanking(req, res) {
  try {
    const hashtagRankingList = await getHashtagRankingList();

    res.send(hashtagRankingList.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function getHashtagsNames(req, res){
  try{
    const namesList = {names:[]}
    const {rows} = await getHashtagsNamesDB();
    rows.forEach(element => {
      namesList.names.push(element.name)
    });
    res.send(namesList)

  } catch(e){
    console.log(e);
    res.status(500).send(e)
  }
}

export async function getHashtagPosts(req, res) {
  const hashtag = req.params.hashtag;

  try {
    const hashtagPostsList = await getHashtagPotsList(hashtag);
    res.send(hashtagPostsList.rows);
    return hashtagPostsList;
  } catch (error) {
    console.log(error);
  }
}

export async function postHashtagList(req, res) {
  const hashtagsIdListInclude = res.locals.hashtagsIdListInclude;
  const { id: postId } = req.params;
  try {
    for (let i = 0; i < hashtagsIdListInclude.length; i++) {
      await postHashtagListDB(postId, hashtagsIdListInclude[i]);
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function hashtagsValidation(req, res, next) {
  const { hashtags } = req.body;
  const hashtagsMissing = [];

  try {
    for (let i = 0; i < hashtags.length; i++) {
      const hashtagExist = await getHashtagsId(hashtags[i]);

      if (hashtagExist.rowCount == 0) {
        hashtagsMissing.push(hashtags[i]);
      }
    }
    res.locals.hashtagsMissing = hashtagsMissing;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function hashtagsListValidation(req, res, next) {
  const hashtagsIdList = res.locals.hashtagsIdList;
  const { id: postId } = req.params;
  const hashtagsIdListInclude = []

  try {
    for (let i = 0; i < hashtagsIdList.length; i++) {
      const hashtagExist = await getHashtagsIdAndPostId(
        hashtagsIdList[i],
        postId
      );

      if(hashtagExist.rowCount == 0){
        hashtagsIdListInclude.push(hashtagsIdList[i])
      }
    }
    console.log(hashtagsIdListInclude)
    res.locals.hashtagsIdListInclude = hashtagsIdListInclude;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function postHashtag(req, res, next) {
  const hashtagsMissing = res.locals.hashtagsMissing;
  try {
    if (hashtagsMissing == undefined) {
      return next();
    }

    for (let i = 0; i < hashtagsMissing.length; i++) {
      await postHashtagDB(hashtagsMissing[i]);
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getHashtagsIds(req, res, next) {
  const { hashtags } = req.body;
  const hashtagsIdList = [];

  try {
    for (let i = 0; i < hashtags.length; i++) {
      const hashtag = await getHashtagsId(hashtags[i]);
      hashtagsIdList.push(hashtag.rows[0].id);
    }
    res.locals.hashtagsIdList = hashtagsIdList;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
