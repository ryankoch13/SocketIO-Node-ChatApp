import React from 'react'
import { Link } from 'react-router-dom'

import './ActiveRooms.css'

const ActiveRooms = ({ name, rooms, setMessages }) => (
    <div className="textContainer">
    { 
        rooms
        ? (
            <div>
                <h1>Rooms with Active Users:</h1>
                <div className="activeContainer">
                    <h2>
                        { rooms.map((room) => (
                            <div key={ room }
                            className="activeItem">
                                { room }
                                    <Link
                                    onClick={ () => setMessages([]) }
                                    to={`./chat?name=${name}&room=${room}`}
                                    >
                                    <button
                                    className="button mt-20" type="submit"
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