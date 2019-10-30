import { validationResult } from 'express-validator';
import 'dotenv/config';
import {Vimeo} from 'vimeo';
import ProcessVideos from './ProcessVideos'

/**
 * Instantiates vimeo client and makes requests to get on demand content from vimeo.
 */
class GetVideos{

    
    
    registerRoutes(app){
        
        app.get('/api/video/:query', (req,res) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) return res.status(442).json({errors: errors.array()});

            var vidProcess = new ProcessVideos();

            let client = new Vimeo(`${process.env.VIMEO_CLIENT_ID}`, `${process.env.VIMEO_CLIENT_SECRET}`, `${process.env.VIMEO_ACCESS_TOKEN}`);
    
            client.request({
                method:'GET',
                path: 'ondemand/genres/'+req.params.query+'/pages',
                page: 1,
            }, (err, body, status_code, headers) => {
                if(err) {
                    console.log(err)
                    return res.sendStatus(status_code)
                }
                
                var response = vidProcess.reduceJson(body.data);
                
                res.json(response);
    
            })
            
        })
    }


    
}

export default GetVideos