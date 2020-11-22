import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import InfoBar from '../InfoBar/infoBar'
import Input from '../Input/input'
import Messages from '../Messages/messages'
import TextContainer from '../TextContainer/textContainer'
import ActiveRooms from '../activeRooms/activeRooms'


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [rooms, setRooms] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        // Sets the state variables to the room and name passed through URL
        setRoom(room)
        setName(name)
        console.log(socket)

        // Sends join event to server
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error)
            }
        }, [ENDPOINT, location.search])

        // Upon un-mount, sends disconnect event to server and turns socket off. 
        return () => {
            socket.disconnect()
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        // Listening for messages, room counts and active rooms
        socket.on('message', (message)=> {
            setMessages(messages => [...messages, message])
        })

        socket.on('roomData', ({ users })=> {
            setUsers(users)
        })

        socket.on('allRooms', ({ rooms })=> {
            setRooms(rooms)
            console.log(rooms)
        })

        return () => {
            // turns off socket upon un-mount
            socket.off()
        }
    },[room])


    // function for sending messages

    const sendMessage = (event) => {
        event.preventDefault()

        if(message){
        socket.emit('sendMessage', { message }, () => setMessage(''))}
    }

    return (
        <div className="outerContainer">
            <ActiveRooms
            name={ name }
            rooms={ rooms }
            setRoom={ setRoom }
            >

            </ActiveRooms>
            <div className="container">
                <InfoBar 
                room={ room }
                />
                <Messages
                messages={ messages }
                name= { name }
                />
                <Input 
                message={ message }
                setMessage= { setMessage }
                sendMessage= { sendMessage }
                />
            </div>
            <TextContainer 
            users={ users }
            />
        </div>
    )
}

export default Chat