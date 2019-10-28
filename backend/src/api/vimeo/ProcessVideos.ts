
class ProcessVideos{

    reduceJson(body){
        var res = {data:[]};

        var videoData = {
            uri: "",
            name:"",
            description:"",
            link:"",
            pictures: {},
            user: {}
        }

        for(var i = 0; i<4;i++){
            res.data[i] = body[i];
        }
        
        return res;

    }

}

export default ProcessVideos;