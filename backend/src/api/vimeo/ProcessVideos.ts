/**
 * Due to the fact that I am basically making a request from vimeo, passing it to my front end, then
 * doing exactly what vimeo's carousel does, it was going to be very slow. So
 * I decided to reduce the size of the json (since it was 25 on demand videos originally) by just getting the
 * first 4 videos + only the data object rather than the entire object for that specific video.
 */
class ProcessVideos{

    reduceJson(body){
        var res = {data:[]};

        for(var i = 0; i<4;i++){
            res.data[i] = body[i];
        }
        
        return res;

    }

}

export default ProcessVideos;