import React from 'react'

import closeIcon from './../../icons/closeIcon.png'

import './infoBar.css'

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            {/* <img className="onlineIcon" src={onlineIcon} /> */}
        <h3 className="roomHeader">{room} room</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
    )

export default InfoBar