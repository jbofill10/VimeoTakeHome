import React from 'react'
import '../CSS/Carousel.css'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow';
import CurrentImage from './CurrentImage'

export default class Carousel extends React.Component {
    constructor(){
        super();
        this.state={
            images:[
                "589972810.jpg",
                "590587169.jpg",
                "595198868.jpg"
            ],
            index: 0,
            xTrans: 0
        };
    }   

    render(){
        return(
            <div className='CarouselBG'>
                <LeftArrow goLeft={this.goLeft}/>
                {this.state.images.map((img, i) => ( <CurrentImage key={i} image={img}/>))}
                <RightArrow goRight={this.goRight}/>
            </div>
        );
    }

    goLeft = () => {
        console.log("Hello")
        if(this.state.index === 0) return;

        this.setState(prevState => ({index:prevState.index-1}));
    }

    goRight = () => {
        if(this.state.index === this.state.images.length-1) return this.setState({index: 0, xTrans:0})

        this.setState(prevState => ({index:prevState.index+1, xTrans:prevState.xTrans - document.querySelector('.Image').clientWidth}));
    }
}