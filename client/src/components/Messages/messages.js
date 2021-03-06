import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import './Messages.css'
import Message from './Message/message'

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        { messages.length === 0 ? 
        <div><p>Loading...</p></div>
        : messages.map((message, i) => 
        <div>
            <Message 
            message={ message }
            name={ name }
            key={ i }
            />
        </div>
        )}
    </ScrollToBottom>
    )

export default Messages