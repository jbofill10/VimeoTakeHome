import React from 'react';

export default class RightArrow extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='RightArrow' onClick={this.props.goRight}>
                {'>'}
            </div>
        );
    }
}