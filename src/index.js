import express from "express"
import { connect } from "./config/database.js";
import { router } from "../routes/index.js";
import bodyParser from "body-parser";
const app = express();
// import TweetService from "./services/tweetservice.js"
app.listen(3000, async (req, res) => {
    console.log("Started server on PORT", 3000);
    await connect();
    console.log("Mongo db connected");
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api', router)
})