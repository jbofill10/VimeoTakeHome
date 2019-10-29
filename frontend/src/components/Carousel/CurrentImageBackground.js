import React from 'react'
import '../CSS/Carousel/CurrentImageBackground.css'
import BuyNowButton from './BuyNowButton'
import WatchTrailerButton from './WatchTrailerButton'



export default class CurrentImage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='ImageContainer'>
            
                <div className='ImageBGEffects'>
                    <img className='Img' src={this.props.BGImage} style={{
                        backgroundSize:"cover"
                    }}/>
                </div>
                <div className='OnDemandContent'>
                    <div className='DisplayContainer'>
                        <img className='ImageDisplay' src={this.props.DisplayImg}/>
                    </div>
                    <BuyNowButton primaryColor={this.props.primaryColor}/>  
                </div>
            </div>
        );
    }
}