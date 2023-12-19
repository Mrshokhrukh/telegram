import React, { useRef, useState } from 'react'
import './left.scss';
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { closeMod, openMod } from '../../redux/modalSlice';
import SidebarModal from '../sidebarModal/SidebarModal';
import ChatList from '../chatList/ChatList';

const LeftColumn = () => {
    const [tab, setTab] = useState('all');
    let formFocus = useRef(null);
    let sidebarFocus = useRef(null);
    let dispatch = useDispatch()
    const handleChange = (tabName) => {
        setTab(tabName)
    }
    const handleFocusSearch = () => {
        formFocus.current.className = 'focus';
    }
    const handleFormBlur = () => {
        formFocus.current.className = '';
    };

    const focusModal = () => {
        dispatch(openMod())
        sidebarFocus.current.className = 'BrgMenu_icon brg_actived'
    }
    const blurModal = () => {
        dispatch(closeMod())
        sidebarFocus.current.className = 'BrgMenu_icon'
    }

    

    return (
        <div className='left_chatListCont'>
            <SidebarModal />
            <div className="left_top">
                <div className='left-header'>
                    <span className='BrgMenu_icon' tabIndex="0" ref={sidebarFocus} onFocus={focusModal} onBlur={blurModal}><FiMenu /></span>
                    <form onFocus={handleFocusSearch} id='left-topForm' onBlur={handleFormBlur} ref={formFocus}>
                        <span className='ioSearch_icon'><IoSearch /></span>
                        <input type="text" placeholder='Search' />
                        <div className="histories">
                            <span></span>
                        </div>
                    </form>
                </div>
                <div className="head-tablist">
                    <div className={tab == 'all' ? 'tab actived' : 'tab'} onClick={() => handleChange('all')}>All <span>8</span></div>
                    <div className={tab == 'private' ? 'tab actived' : 'tab'} onClick={() => handleChange('private')}>Private <span>8</span></div>
                    <div className={tab == 'groups' ? 'tab actived' : 'tab'} onClick={() => handleChange('groups')}>Groups <span>8</span></div>
                    <div className={tab == 'channel' ? 'tab actived' : 'tab'} onClick={() => handleChange('channel')}>Channel <span>8</span></div>
                    <div className={tab == 'unread' ? 'tab actived' : 'tab'} onClick={() => handleChange('unread')}>Unread <span>8</span></div>
                </div>
            </div>
            <div className="left_chat_list">
                <ChatList />
            </div>
        </div>
    )
}

export default LeftColumn