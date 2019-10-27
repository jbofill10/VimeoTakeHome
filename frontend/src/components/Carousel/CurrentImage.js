import React from 'react'
import '../CSS/CurrentImage.css'


export default class CurrentImage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='Image' style={{
                background: `url(${this.props.image})`,
            }}/>
        );
    }
}