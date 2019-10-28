import * as express from "express";
import 'dotenv/config'
import GetVideos from "./api/vimeo/GetVideos";
import bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    console.log("Hello");
})

app.listen(port, err => {
    if(err) console.log(err);

    console.log("Listening on port", port);
})

const getVimeoVideos = new GetVideos();

getVimeoVideos.registerRoutes(app);