import TweetRepository from "../repository/tweetRepository.js";
import HashtagRepository from "../repository/hashtagRepository.js";
class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }
    async create(data){

        // Here if same hashtag is used more than once in same tweet, then the same hashtag will be inserted twice which is wrong. 
        let tags=data.content.match(/#[a-z0-9_A-Z]+/g);
        tags=tags.map((tag)=>tag.substring(1).toLowerCase());
        const tweet=await this.tweetRepository.createTweet(data);
        const presentTags=await this.hashtagRepository.findByName(tags);
        let titleofpresentTags=presentTags.map(tags=>tags.title);
        let newTags=tags.filter(tags=>!titleofpresentTags.includes(tags))
        newTags=newTags.map((tag)=>{
            return {title:tag,tweets:[tweet.id]}
        });
        presentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        const createTags=await this.hashtagRepository.bulkCreate(newTags);
        return tweet
    }  
}
export default TweetService;
