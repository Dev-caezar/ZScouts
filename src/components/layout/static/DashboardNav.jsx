import React from 'react'
import "../../../styles/dashboardNav.css"
import { BiSolidCategory } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const DashboardNav = () => {
  return (
    <div className='sidebar_body'>
      <div className="sidebar_wrapper">
        <div className="sidebar_header">
            <div className="dashboard_logo">
                <img src="/src/assets/public/whiteLogo.png" alt="" />
            </div>
        </div>
        <div className="dashboard_content">
            <div className="d_content_card">
                <BiSolidCategory className='sidebar_icon'/>
                <h4>My Profile</h4>
            </div>
            <div className="d_content_card">
                <MdVideoLibrary className='sidebar_icon'/>
                <h4>My Videos</h4>
            </div>
        </div>
        <div className="sidebar_footer">
            <div className="d_content_card">
                <IoSettingsOutline className='sidebar_icon'/>
                <h4>Settings</h4>
            </div>
            <div className="d_content_card">
                <TbLogout2 className='sidebar_icon'/>
                <h4>Logout</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav
