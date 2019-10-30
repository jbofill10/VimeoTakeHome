import React from 'react';

/**
 * The right arrow for the carousel
 */
export default class RightArrow extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <a className='RightArrow' onClick={this.props.goRight}>
                {'>'}
            </a>
        );
    }
}