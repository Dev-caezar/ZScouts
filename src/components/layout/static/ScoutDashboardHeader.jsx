import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BiSolidCategory } from 'react-icons/bi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoLogOut } from 'react-icons/io5'
import { MdCancel, MdVideoLibrary } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import zlogo from "../../../assets/Zlogo.jpg"

const ScoutDashboardHeader = () => {
    const nav = useNavigate()
    const user = useSelector(state => state.user.scoutDetails.data)
    console.log(user)

  const [openNav, setOpenNav] = useState(false)
  const [logout, setLogout] = useState(false)

  const handleOpenNav = () => setOpenNav(prev => !prev)

  const handleLogout = () => {
    setLogout(true)
    console.log("Logout clicked")
  }

  const confirmLogout = () => {
    console.log("Logged out")
    nav("/")
    closeModal()
  }
  const initial = user?.fullname ? user.fullname.charAt(0).toUpperCase() : '';
  console.log(initial)
  const handlePlayerProfile = () => nav("/scout_profile");
  const handlePlayerVideo = () => nav("/player_discovery");
  const handlePlayerSettings = () => nav("/scout_setting");

  const closeModal = () => setLogout(false)
  return (
    <div className='dashboardHeader_body'>
          <div className="dashboard_header_wrapper">
            <div className="header_left">
              <h4>Welcome to Your Solution!</h4>
              <p>Manage your profile and stay connected.</p>
              <div className="dashboard_logo">
                <img src={zlogo} alt="Dashboard Logo" />
              </div>
            </div>
    
            <div className="header_right">
              <div className="header_right_img">
                {
                  user?.profilePic ?
                  <img src={user?.profilePic} alt="Dashboard Logo" />:
                  <span className='profile_initial'>{initial}</span>
                }
              </div>
              <div className="header_right_txt">
                <h4>{user?.fullname}</h4>
                <p>{user?.email}</p>
              </div>
              <HiMenuAlt3 className='dash_icon' onClick={handleOpenNav} />
    
              {openNav && (
                <div className="dashboard_header_modal">
                  <div className="dashboardheader_modal_wrapper">
                    <div className="d_modal_header">
                      <div className="d_modal_img">
                        <img src="/src/assets/whiteLogo.png" alt="Modal Logo" />
                      </div>
                      <MdCancel className='cancel_icon' onClick={handleOpenNav} />
                    </div>
    
                    <div className="d_modal_content">
                      <div className="modal_card" onClick={handlePlayerProfile}>
                        <BiSolidCategory className='d_sidebar_icon' />
                        <h4>My Profile</h4>
                      </div>
                      <div className="modal_card" onClick={handlePlayerVideo}>
                        <MdVideoLibrary className='d_sidebar_icon' />
                        <h4>Player Discovery</h4>
                      </div>
                    </div>
    
                    <div className="modal_footer">
                      <div className="modal_card" onClick={handlePlayerSettings}>
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

export default ScoutDashboardHeader
