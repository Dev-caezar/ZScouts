import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi"
import "../../../styles/dashboardHeader.css"
import { MdCancel, MdVideoLibrary } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { BiSolidCategory } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { IoLogOut } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import zscoutlogo from '../../../assets/whiteLogo.png'
import whitelogo from '../../../assets/Zlogo.jpg'

const DashboardHeader = () => {
  const nav = useNavigate()

  const [openNav, setOpenNav] = useState(false)
  const [logout, setLogout] = useState(false)

  const handleOpenNav = () => setOpenNav(prev => !prev)
      const player = useSelector(state => state.player.playerDetails)
      const profile = useSelector(state => state.player.playerKyc)
      console.log("object", player)
  
  const firstInitial = player?.fullname ? player.fullname.charAt(0).toUpperCase() : '';


  const handleLogout = () => {
    setLogout(true)
    console.log("Logout clicked")
  }

  const confirmLogout = () => {
    console.log("Logged out")
    nav("/")
    closeModal()
  }

  const closeModal = () => setLogout(false)

  return (
    <div className='dashboardHeader_body'>
      <div className="dashboard_header_wrapper">
        <div className="header_left">
          <h4>Welcome to Your Solution!</h4>
          <p>Manage your profile and stay connected.</p>
          <div className="dashboard_logo">
            <img src={whitelogo} alt="Dashboard Logo" />
          </div>
        </div>
        <div className="header_right">
        <div className="header_right_img">
            {profile?.profilePic ? (
              <img src={profile.profilePic} alt="Profile" />
            ) : (
              <span className="file_initiaprol">{firstInitial}</span>
            )}
          </div>
          <div className="header_right_txt">
            <h4>{player?.fullname}</h4>
            <p>{player?.email}</p>
          </div>
          <HiMenuAlt3 className='dash_icon' onClick={handleOpenNav} />
          {openNav && (
            <div className="dashboard_header_modal">
              <div className="dashboardheader_modal_wrapper">
                <div className="d_modal_header">
                  <div className="d_modal_img">
                    <img src={zscoutlogo} alt="Modal Logo" />
                  </div>
                  <MdCancel className='cancel_icon' onClick={handleOpenNav} />
                </div>

                <div className="d_modal_content">
                  <div className="modal_card" onClick={() => nav("/player_profile")}>
                    <BiSolidCategory className='d_sidebar_icon' />
                    <h4>My Profile</h4>
                  </div>
                  <div className="modal_card" onClick={() => nav("/player_video")}>
                    <MdVideoLibrary className='d_sidebar_icon' />
                    <h4>My Videos</h4>
                  </div>
                </div>

                <div className="modal_footer">
                  <div className="modal_card" onClick={() => nav("/player_setting")}>
                    <AiFillSetting className='d_sidebar_icon' />
                    <h4>Settings</h4>
                  </div>
                  <div className="modal_card" onClick={handleLogout}>
                    <IoLogOut className='d_sidebar_icon' />
                    <h4>Logout</h4>
                  </div>

                  {logout && (
                    <div className="slogout_modal_overlay">
                      <div className="slogout_modal_content">
                        <h2>Log out</h2>
                        <h4>Are you sure you want to log out?</h4>
                        <div className="slogout_modal_actions">
                          <button className='smodal_cta' onClick={closeModal}>Cancel</button>
                          <button className='smodal_accept' onClick={confirmLogout}>Yes</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
