import React from 'react';
import CurrentImage from './CurrentImage'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow';
import '../CSS/Carousel/SlideImage.css'

/**
 * Parent Component class for the carousel
 * Includes arrows as well 
 */
export default class SlideImage extends React.Component{
    constructor(){
        super();
        this.state={
            images:null,
            index:0,
            xTrans:0,
            firstTrans: 0
        };
    }

    componentDidMount(){
        this.getImages();
    }

    render(){
        return(
        <div className='CarouselArrowContainer'>
            <div className='LeftArrowContainer'>
                <LeftArrow goLeft={this.goLeft}/>
            </div>
            <div className='RightArrowContainer'>
                <RightArrow goRight={this.goRight}/>
            </div>
            
            <div className='CarouselBG' style={{
                transform:`translateX(${this.state.xTrans}px)`,
                transition:'transform ease-out 0.45s'
            }}>
                {this.loadImages()}   
            </div>
            </div>     
        );
    }

    getImages = () => {
        fetch('/api/video/comedy').then(response => response.json()).then(data => this.setState({images: data}));
    }

    loadImages = () => {
        if(this.state.images === null) return;
        
        else{
            
            return this.state.images.data.map((data, i) => {
                return(

                    <CurrentImage url={data.link} primaryColor={data.colors.secondary} 
                    BGImage={data.pictures.sizes[data.pictures.sizes.length-1].link} 
                    index={i} 
                    DisplayImg={data.pictures.sizes[6].link} 
                    description={data.description.substring(0,data.description.indexOf('.')+1)}
                    embed={data.film.embed.html} 
                    title={data.name} />
                    
                )
            });
        }
    }

    goLeft = () => {
        if(this.state.index === 0) return;

        this.setState(prevState => ({index:prevState.index-1, xTrans:prevState.xTrans + document.querySelector('.ImageContainer').clientWidth}));
    }

    goRight = () => {

        if(this.state.index === this.state.images.data.length-1) return this.setState({index: 0, xTrans:0})

        this.setState(prevState => ({index:prevState.index+1, xTrans:prevState.xTrans - document.querySelector('.ImageContainer').clientWidth}));
    }
}