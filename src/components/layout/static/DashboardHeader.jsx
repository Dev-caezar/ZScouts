import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

import "../../../styles/dashboardHeader.css"
import { MdCancel, MdVideoLibrary } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { BiSolidCategory } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';

const DashboardHeader = () => {
   const nav = useNavigate()
       const handlePlayerProfile =()=>{
           nav("/player_profile")
       }
       const handlePlayerVideo =()=>{
           nav("/player_video")
       }
       const handlePlayerSettings =()=>{
           nav("/player_setting")
       }
    const [openNav,setOpenNav] = useState(false)
      const handleOpenNav =()=>{
        setOpenNav((prev)=> !prev)
      }
  return (
    <div className='dashboardHeader_body'>
      <div className="dashboard_header_wrapper">
        <div className="header_left">
            <h4>Welcome to Your Solution!</h4>
            <p>Manage your profile and stay connected.</p>
            <div className="dashboard_logo">
                <img src="/src/assets/Zlogo.jpg" alt="" />
            </div>
        </div>
        <div className="header_right">
            <div className="header_right_img"></div>
            <div className="header_right_txt">
                <h4>Scott Michall</h4>
                <p>Beaconhills@gmail.com</p>
            </div>
            <HiMenuAlt3 className='dash_icon'onClick={handleOpenNav}/>
            {             openNav && (
              <div className="dashboard_header_modal">
                 <div className="dashboardheader_modal_wrapper">
                    <div className="d_modal_header">
                        <div className="d_modal_img">
                            <img src="/src/assets/whiteLogo.png" alt="" />
                        </div>
                        <MdCancel className='cancel_icon' onClick={handleOpenNav}/>
                    </div>
                    <div className="d_modal_content">
                        <div className="modal_card" onClick={handlePlayerProfile}>
                            <BiSolidCategory className='d_sidebar_icon'/>
                            <h4>My Profile</h4>
                        </div>
                        <div className="modal_card" onClick={handlePlayerVideo}>
                            <MdVideoLibrary className='d_sidebar_icon'/>
                            <h4>My Videos</h4>
                        </div>
                    </div>
                    <div className="modal_footer">
                        <div className="modal_card" onClick={handlePlayerSettings}>
                            <AiFillSetting className='d_sidebar_icon'/>
                            <h4>Settings</h4>
                        </div>
                        <div className="modal_card">
                            <IoLogOut className='d_sidebar_icon'/>
                            <h4>Logout</h4>
                        </div>
                    </div>
                 </div>
             </div>
           )
        }
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
