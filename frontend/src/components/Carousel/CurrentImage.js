import React from 'react'
import '../CSS/Carousel/CurrentImageBackground.css'
import BuyNowButton from './BuyNowButton'
import WatchTrailerButton from './WatchTrailerButton'

/**
 * Component class that manages everything about the current image being displayed
 * This goes for the background effect, buttons, poster, title and description, etc.
 */
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
                        <BuyNowButton url={this.props.url} primaryColor={this.props.primaryColor}/>  
                        <WatchTrailerButton url={this.props.url}/>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}