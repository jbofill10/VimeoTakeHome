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
                backgroundImage: `url(${this.props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 60%',
                height:'100px',
                width:'100%'
            }}/>
        );
    }
}