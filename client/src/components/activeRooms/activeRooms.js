import React from 'react'
import { Link } from 'react-router-dom'

import './ActiveRooms.css'

const ActiveRooms = ({ name, rooms, setRoom }) => (
    <div className="textContainer">
    { 
        rooms
        ? (
            <div>
                <h1>Rooms with Active Users:</h1>
                <div className="roomContainer">
                    <h2>
                        { rooms.map((room) => (
                            <div key={ room }
                            className="activeItem">
                                { room }
                                    <Link
                                    to={`./chat?name=${name}&room=${room}`}
                                    onClick={() => setRoom()}
                                    >
                                    <button
                                    className="join-button" type="submit"
                                    >Join</button>
                                    </Link>
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

export default ActiveRooms