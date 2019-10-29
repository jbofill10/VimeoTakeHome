import React from 'react';
import '../CSS/CarouselContent/Hexagon.css'

export default class Hexagon extends React.Component{


    render(){
        return(
            <div className='HexContainer'>
                <div className='hexagon'/>
                <div className='square'/>
            </div>
        )
    }
}