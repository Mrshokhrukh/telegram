import React from 'react'
import './chatlist.scss';
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { change } from '../../redux/chatSlice';
import { users } from '../../data/data';
const ChatList = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate();
    let { userId } = useParams();

    const handleChat = (id) => {
        dispatch(change(id));
        navigate(`/chat/${id}`);
    }

    return (
        <div className='chatList'>
            <div className="chat-ripples">
                {
                    users.map((user, i) => {
                        return (
                            <div className={user.id == userId ? 'c-ripple chat_row chatting_activated' : 'c-ripple chat_row'} key={i} onClick={() => handleChat(user.id)}>
                                <div className='avatar-row-media'>
                                    <img src={user.src} alt="404" />
                                </div>
                                <div className="chat_diaolog_infoes">
                                    <div className="dialog_title">
                                        <p className='dialogText'>{user.name}</p>
                                        <div id='checkmark_date'><span><IoCheckmarkDoneSharp /></span> {user.lastMsg.time} </div>
                                    </div>
                                    <div className="dialog_subtitle">
                                        <span>{user.lastMsg.text}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatList