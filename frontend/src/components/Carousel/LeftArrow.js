import React from 'react';

/**
 * The left arrow in the carousel
 */
export default class LeftArrow extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return (
            <a className="LeftArrow" onClick={this.props.goLeft}>
                {'<'}
            </a>
            )
    }

}