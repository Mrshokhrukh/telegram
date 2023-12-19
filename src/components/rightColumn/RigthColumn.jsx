import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './rigth.scss'
import { useParams } from 'react-router-dom'
import ChatFormInput from '../chatForm/ChatFormInput'
import Messages from '../messages/Messages'

const RigthColumn = () => {
  // let chatID = useSelector((state) => state.chat.chatId);
  let dispatch = useDispatch()
  let { userId } = useParams();

  useEffect(() => {
    dispatch();
  }, [])

  return (
    <div className="rigthChatColumn_wrapper">
      <div className='top-header-fixed'>
        <div className="chat_info_wrapper_left">
          <img src="https://img.freepik.com/free-photo/fog-forest-with-tall-trees_250224-60.jpg" alt="" />
          <div className="chat_info_titles">
            <p>Hasanboy (Python)</p>
            <span>last seen recently</span>
          </div>
        </div>
        <div className="header-tools_right">
          <div className='hd_tool tool-1'>
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className='hd_tool tool-2'>
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <div className='hd_tool tool-3'>
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </div>
        </div>

      </div>
      <div className="chatting_interactive chatId-container">
        <div id="chat-body-container">
          <Messages myMsg={true} />
        </div>
      </div>
      <ChatFormInput />
    </div>
  )
}
export default RigthColumn