import React from 'react'

import './TextContainer.css'
import onlineIcon from './../../icons/onlineIcon.png'

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div className="headerText">
            <h1>RyanChat</h1>
            <h2>Real-Time Chat App</h2>
            <h2>Built with React, Express, Node, and Socket.io</h2>
        </div>
        { 
        users 
        ? (
            <div>
                <h1>People in This Room:</h1>
                <div className="activeContainer">
                    <h2>
                        { users.map(({ name }) => (
                            <div key={ name }
                            className="activeItem">
                                { name }
                                <img alt="Online icon" src={ onlineIcon } />
                            </div>
                        ))}
                    </h2>
                    </div>
            </div>
        )
        : null
    }
    </div>
)

export default TextContainer