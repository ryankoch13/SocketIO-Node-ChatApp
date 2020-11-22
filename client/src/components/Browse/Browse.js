import React from 'react'

import './Browse.css'


const Browse = ({ rooms, roomCounts, clicked }) =>  (
        <div className="browse-container">
        { clicked &&
        <div>
                <h1>Rooms:</h1>
                <div className="activeContainer">
                    <h2>
                        { clicked && rooms.map((room) => (
                            <div key={ room }
                            className="activeItem">
                                { room } : { roomCounts.room } online now
                            </div>
                        ))}
                    </h2>
                    </div>
            </div>
        }
        </div>
    )

export default Browse