import React from 'react'
import './CSS/BlackHalfPageView.css'

export default class BlackHalfPageView extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <div className="BlackBackground">
                <div className='BeamsContentContainer'>
                    <div className='TextContainer'>
                        <div className='BeamsTitle'>BEAMS</div>
                        <div className='BeamsCaption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                    <img className='BEAMS' src="/589972810.jpg"/>
                </div>
            </div>
        )
    }
}