import React, { useState } from 'react'
import './chatForm.scss'
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
const ChatFormInput = () => {
  const [msgField, setMsgField] = useState();

  return (
    <div className='chatInput_form_cont'>
      <div className="form_wrapper">
        <form id="message_form">
          <span className="msg_emojies_icon">
            <BsEmojiSmile />
          </span>
          <span className="msg_inputField">
            <input type="text" placeholder='Message' onChange={(e) => setMsgField(e.target.value) || ''} />
          </span>
          <span className="msg_fileUpload_icon">
            <ImAttachment />
          </span>
        </form>
        <div className={`form_action-radius ${msgField ? 'msg_sender' : 'voice-msg'}`}>
          {
            msgField ? <IoSend /> : <MdOutlineKeyboardVoice />
          }
        </div>
      </div>
    </div>
  )
}

export default ChatFormInput