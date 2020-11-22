import React from 'react'
import ReactEmoji from 'react-emoji'
import DayJS from 'react-dayjs'

import './Message.css'

const Message = ({ message: { user, text, time }, name }) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true 
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer sentByUser">
                <p className="sentTime"><DayJS format="HH:mm">{ time }</DayJS></p>
                <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ ReactEmoji.emojify(text) }</p>
                </div>
                <p className="sentText">{ trimmedName }</p>
            </div>
        )
        : (
            <div className="messageContainer sentByOther">
                <p className="sentText sentByOther">{ user }</p>
                <div className="messageBox sentByOther">
                    <p className="messageText sentByOther">{ ReactEmoji.emojify(text) }</p>
                </div>
                <p className="sentTime"><DayJS format="HH:mm">{ time }</DayJS></p>
            </div>
        )
    )
}

export default Message