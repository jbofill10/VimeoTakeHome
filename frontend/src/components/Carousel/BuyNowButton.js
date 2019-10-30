import React from 'react';
import '../CSS/CarouselContent/BuyNowButton.css'
import Hexagon from './Hexagon'

/**
 * Component class for the "Buy Now" button that redirects to the movie page
 */
export default class BuyNowButton extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className='ButtonContainer'>
                 
                <button onClick={this.onBuyNowClick} className='BuyNowButton' style={{
                    backgroundColor: this.props.primaryColor
                }}>
                    
                    <div className='BuyNow'>Buy Now</div>
                <Hexagon primaryColor={this.props.primaryColor}/>
                </button>
            </div>
        )
    }
    
    onBuyNowClick = () => {
        window.location.href=this.props.url;
    }
    

}