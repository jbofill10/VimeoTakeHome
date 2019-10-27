import React from 'react';
import "./CSS/HalfPageView.css"

export default class WhiteHalfPageView extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="WhiteBackground">
                <div className='MonsoonContainer'>
                    <img className='Monsoon' src="595198868.jpg"/>
                    <div className='WordContainer'>
                        <div className='Title'>MONSOON III</div>
                        <div className='Caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>    
                    </div>
                    </div>
            </div>
        );
    }
}