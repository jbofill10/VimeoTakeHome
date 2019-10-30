import React from 'react';
import '../CSS/CarouselContent/WatchTrailerButton.css'

/**
 * Component class for the "Watch Trailer" button
 */
export default class WatchTrailerButton extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='WatchTrailerContainer'>
                <button className='WatchTrailerButton' onClick={this.onWatchTrailerClick}>
                    <div className='WatchTrailer'>
                        Watch Trailer
                    </div>
                    
                </button>
            </div>
        );
    }
    // I wanted to embed the vimeo player, but it would take too long to make a custom css modal.
    onWatchTrailerClick = () => {
        window.location.href=this.props.url;
        
    }

}