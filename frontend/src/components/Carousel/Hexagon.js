import React from 'react';
import '../CSS/CarouselContent/Hexagon.css'
import logo from '../../logo.svg'

/**
 * Component class for the hexagon on the play button
 */
export default class Hexagon extends React.Component{


    render(){
        return(
            <div className='HexWrapper'>
                <img className='hex' src={logo}/>
                <div className='Triangle' 
                style={{    
                    
                    borderTop: "9px solid transparent",
                    borderBottom: "9px solid transparent",
                    borderLeft: "13px solid "+this.props.primaryColor
                    
                    }}/>
            </div>
        )
    }
}