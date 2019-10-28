import React from 'react'
import '../CSS/Carousel.css'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow';
import CurrentImage from './CurrentImage'

export default class Carousel extends React.Component {
    constructor(){
        super();
        this.state={
            images:null
        };
    }
    
    componentDidMount(){
        this.getImages();
    }

    render(){
        return(
            <div className='CarouselBG'>
                <LeftArrow goLeft={this.goLeft}/>
                    {this.loadImages()}
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

    getImages = () => {
        fetch('/api/video/science').then(response => response.json()).then(data => this.setState({images: data}));
    }

    loadImages = () => {
        if(this.state.images === null){
            return(
                <CurrentImage image={null}/>
            );
        }
        
        else{
            this.state.images.data.map((data, i) => {

                return(

                    <CurrentImage image={data.pictures.sizes[data.pictures.sizes.length-1].link}/>
                    
                )
            });

            console.log("done")
        }
    }
}