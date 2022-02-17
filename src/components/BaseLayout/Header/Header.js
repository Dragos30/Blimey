import React from 'react';
import MenuContainer from '../menu-container/MenuContainer';
//Internals
import './header.css';
import video from './video.mp4';

const Header = () => (
    <div className="header">
        <MenuContainer />
        <video className='videoTag' autoPlay loop muted playsInline>
                <source src={video} type='video/mp4' />
            </video>
        <div> 
            <h2>A CONSTRUCTION RECRUITMENT AGENCY THAT YOU CAN TRUST</h2> 
            </div>
        </div>
)

export default Header;