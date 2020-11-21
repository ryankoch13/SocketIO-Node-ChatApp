import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ReactEmoji from 'react-emoji'

import './Message.css'

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true 
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer sentByUser">
                <p className="sentText">{ trimmedName }</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ ReactEmoji.emojify(text) }</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer sentByOther">
                <div className="messageBox sentByOther">
                    <p className="messageText sentByOther">{ ReactEmoji.emojify(text) }</p>
                </div>
                <p className="sentText sentByOther">{ user }</p>
            </div>
        )
    )
}

export default Message