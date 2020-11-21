import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import InfoBar from '../InfoBar/infoBar'
import Input from '../Input/input'
import Messages from '../Messages/messages'
import TextContainer from '../TextContainer/textContainer'

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

        setRoom(room)
        setName(name)
        console.log(socket)

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error)
            }
        }, [ENDPOINT, location.search])

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
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
    }, [])


    // function for sending messages

    const sendMessage = (event) => {
        event.preventDefault()

        if(message){
        socket.emit('sendMessage', { message }, () => setMessage(''))}
    }

    return (
        <div className="outerContainer">
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
            rooms={ rooms }
            />
        </div>
    )
}

export default Chat