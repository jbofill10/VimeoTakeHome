import React from 'react'
import '../CSS/Carousel/Carousel.css'
import CurrentImage from './CurrentImage'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow';

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
        <div className='CarouselContainer'>
            <div className='SlideAndArrowsContainer'>
                <LeftArrow goLeft={this.goLeft}/>
            
                <div className='SlideContainer'>
                    <div className='CarouselBG'>
                        {this.loadImages()}
                    </div>
                </div>

                <RightArrow goRight={this.goRight}/>
            </div>
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
        fetch('/api/video/comedy').then(response => response.json()).then(data => this.setState({images: data}));
    }

    loadImages = () => {
        if(this.state.images === null) return;
        
        else{
            
            return this.state.images.data.map(data => {
                console.log(data.description)
                return(

                    <CurrentImage primaryColor={data.colors.secondary} BGImage={data.pictures.sizes[data.pictures.sizes.length-1].link} DisplayImg={data.pictures.sizes[6].link} 
                    description={data.description.substring(0,data.description.indexOf('.')+1)} title={data.name} />
                    
                )
            });
        }
    }
}