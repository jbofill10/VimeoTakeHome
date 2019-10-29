import React from 'react';
import '../CSS/CarouselContent/BuyNowButton.css'
import Hexagon from './Hexagon'

export default class SlideImage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className='ButtonContainer'>
                 
                <div className='BuyNowButton' style={{
                    backgroundColor: this.props.primaryColor
                }}>
                    
                    <div className='BuyNow'>Buy Now</div>

                </div>
            </div>
        )
    }

}