import React from 'react'
import '../CSS/Carousel/Carousel.css'
import SlideImage from './SlideImage'

/**
 * Two divs that hold down the carousel
 */
export default class Carousel extends React.Component {
    constructor(){
        super();
        this.state={
        };
    }
    


    render(){
        return(
        <div className='CarouselContainer'>
                <div className='SlideContainer'>
                    <SlideImage/>
                </div>
        </div>
        );
    }

}