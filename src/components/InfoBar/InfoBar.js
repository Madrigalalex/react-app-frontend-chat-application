import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.jpg';


const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer"> 
            <img className="onlineIcon" src={onlineIcon} alt="online image" width="20" height="20"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer"> 
            <a href="/"><img src={closeIcon} alt="close image" width="25" height="20"/></a>
        </div>
    </div>


);

export default InfoBar;