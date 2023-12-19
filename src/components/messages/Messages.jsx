import React from 'react'
import './messages.scss'
const Messages = ({ myMsg }) => {
    return (
        <div className="chatMsg-tg incoming-msg">
            <div id='_text_msg' data-income>
                <p>Lorem ipsum dolor sit, amet</p>
                <span id='msg_dateTime'>22:05</span>
            </div>
        </div>

    )
}

export default Messages