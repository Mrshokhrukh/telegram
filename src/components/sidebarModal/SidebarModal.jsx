import React from 'react'
import './sidebarModal.scss';
import { HiOutlinePlay } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
const SidebarModal = () => {
    let isOpenModal = useSelector((state) => state.sidebarModal.isOpen)

    return (
        <div className={isOpenModal ? 'backdrop_menu present' : 'backdrop_menu'}>
            <div id="menuItemLists">
                <div className="menu-item"> <span id='menuItem-icon'><ion-icon name="bookmark-outline"></ion-icon></span> <p id='menuItem-title'>Saved Messages</p></div>
                <div className="menu-item"> <span id='menuItem-icon'><MdOutlineArchive /></span> <p id='menuItem-title'>Archive</p></div>
                <div className="menu-item"> <span id='menuItem-icon'><HiOutlinePlay /></span><p id='menuItem-title'>My Stories</p> </div>
                <div className="menu-item"> <span id='menuItem-icon'><ion-icon name="person-outline"></ion-icon></span> <p id='menuItem-title'>Contacts</p></div>
                <div className="menu-item"> <span id='menuItem-icon'><FiSettings /></span> <p id='menuItem-title'>Settings</p></div>
                <div className="menu-item"> <span id='menuItem-icon'><BsMoonStars /></span> <p id='menuItem-title'>Night Mode <span>On</span></p></div>
                <div className="menu-item"> <span id='menuItem-icon'><MdAnimation /></span> <p id='menuItem-title'>Animations <span>Off</span></p></div>
                <div className="menu-item"> <span id='menuItem-icon'><FaRegQuestionCircle /></span> <p id='menuItem-title'>Telegram Features</p></div>
                <div className="menu-item"> <span id='menuItem-icon'><IoBugSharp /></span><p id='menuItem-title'>Report Bug</p> </div>
            </div>
            <div className="tg_version">
                Telegram Web 1.9
            </div>
        </div>
    )
}

export default SidebarModal