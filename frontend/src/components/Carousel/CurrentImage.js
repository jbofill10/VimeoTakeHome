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
                <div className='ImageEffect' 
                style={{
                    backgroundColor: this.props.primaryColor,
                    }}/>
                <div className='OnDemandContent'>
                    <div className='DisplayContainer'>
                        <img className='ImageDisplay' src={this.props.DisplayImg}/>
                    </div>
                <div className='ButtonAndWordsContainerlol'>
                    <div className='WordContentContainer'>
                        <div className='ContentTitle'>{this.props.title}</div>
                        <div className='ContentDesc'>{this.props.description}</div>
                    </div>

                    <div className='TwoButtonWrapper'>
                        <BuyNowButton primaryColor={this.props.primaryColor}/>  
                        <WatchTrailerButton/>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}