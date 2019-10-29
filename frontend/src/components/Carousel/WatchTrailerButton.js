import React from 'react';
import '../CSS/CarouselContent/WatchTrailerButton.css'

export default class SlideImage extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='WatchTrailerContainer'>
                <div className='WatchTrailerButton'>
                    <div className='WatchTrailer'>
                        Watch Trailer
                    </div>
                    
                </div>
            </div>
        );
    }

}