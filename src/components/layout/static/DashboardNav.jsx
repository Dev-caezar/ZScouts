import React, { useState } from 'react';
import "../../../styles/dashboardNav.css";
import { BiSolidCategory } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { IoClose, IoLogOut } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutPlayer } from '../../../global/Player';
import whitelogo from "../../../assets/whiteLogo.png"

const DashboardNav = () => {
  const [logout, setLogout] = useState(false);
  const dispatch = useDispatch();
  const player = useSelector((state)=> state.player.playerDetails.id)
  console.log("this is my id", player)
  const nav = useNavigate();

  const handlePlayerProfile = () => nav("/player_profile");
  const handlePlayerVideo = () => nav("/player_video");
  const handlePlayerSettings = () => nav("/player_setting");
  const handleLogout = () => setLogout(true);

  const closeModal = () => setLogout(false);

  const confirmLogout = () => {
    dispatch(logoutPlayer())
    console.log("Logged out");
    closeModal();
    nav("/")
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
            <h4>My Videos</h4>
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
      {logout && (
        <div className="logout_modal_overlay">
          <div className="logout_modal_content">
            <h2>Log out</h2>
            <h4>Are you sure you want to log out?</h4>
            <div className="logout_modal_actions">
                <button className='modal_cta' onClick={()=> setLogout(false)}>Cancel</button>
                <button className='modal_accept' onClick={confirmLogout}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardNav;
