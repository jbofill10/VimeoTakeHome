import React from 'react'
import '../CSS/CurrentImage.css'


export default class CurrentImage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='Image' src={`url${this.props.image}`} style={{
                height:'50vh',
                width:'100vw'
            }}/>
        );
    }
}