import React from 'react';

export default class SlideImage extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='SlideImageContainer'>
                <img className='SlideImage' src={this.props.image}/>
            </div>
        );
    }
}