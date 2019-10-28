import React from 'react';

export default class LeftArrow extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return (
            <div className="LeftArrow" onClick={this.props.goLeft}>
                {'<'}
            </div>
            )
    }

}