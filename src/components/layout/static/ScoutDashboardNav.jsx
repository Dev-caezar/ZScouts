import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';
import { IoLogOut } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../../global/Fearures';
import whitelogo from "../../../assets/whiteLogo.png"


const ScoutDashboardNav = () => {
     const [logoutState, setLogoutState] = useState(false);
      const nav = useNavigate();
      const dispatch = useDispatch()
    
      const handlePlayerProfile = () => nav("/scout_profile");
      const handlePlayerVideo = () => nav("/player_discovery");
      const handlePlayerSettings = () => nav("/scout_setting");
      const handleLogout = () => setLogoutState(true);
    
      const closeModal = () => setLogoutState(false);
    
      const confirmLogout = () => {
        dispatch(logout())
        console.log("Logged out");
        nav("/")
        closeModal();
      };
    
  return (
    <div className='sidebar_body'>
          <div className="sidebar_wrapper">
            <div className="sidebar_header">
              <div className="sidebar_dashboard_logo">
                <img src={whitelogo} alt="Logo" />
              </div>
            </div>
    
            <div className="dashboard_content">
              <div className="d_content_card" onClick={handlePlayerProfile}>
                <BiSolidCategory className='sidebar_icon'/>
                <h4>My Profile</h4>
              </div>
              <div className="d_content_card" onClick={handlePlayerVideo}>
                <MdVideoLibrary className='sidebar_icon'/>
                <h4>Player Discovery</h4>
              </div>
            </div>
    
            <div className="sidebar_footer">
              <div className="d_content_card" onClick={handlePlayerSettings}>
                <AiFillSetting className='sidebar_icon'/>
                <h4>Settings</h4>
              </div>
              <div className="d_content_card" onClick={handleLogout}>
                <IoLogOut className='sidebar_icon'/>
                <h4>Logout</h4>
              </div>
            </div>
          </div>
          {logoutState && (
            <div className="logout_modal_overlay">
              <div className="logout_modal_content">
                <h2>Log out</h2>
                <h4>Are you sure you want to log out?</h4>
                <div className="logout_modal_actions">
                    <button className='modal_cta' onClick={()=> setLogoutState(false)}>Cancel</button>
                    <button className='modal_accept' onClick={confirmLogout}>Yes</button>
                </div>
              </div>
            </div>
          )}
        </div>
  )
}

export default ScoutDashboardNav
