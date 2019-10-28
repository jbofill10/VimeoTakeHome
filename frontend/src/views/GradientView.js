import React from 'react';
import "./CSS/GradientView.css"

export default class FullPageView extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='GradientContainer'>
                <div className='Move2ContentContainer'>
                    <img className='Move2' src="590587169.jpg"/>
                    <div className='Move2TextContainer'>
                        <div className='Move2Title'>Move 2</div>
                        <div className='Move2Caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </div>
            </div>
        );
    }
}
