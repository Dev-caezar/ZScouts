import React from 'react'
import "../../../styles/dashboardHeader.css"

const DashboardHeader = () => {
  return (
    <div className='dashboardHeader_body'>
      <div className="dashboard_header_wrapper">
        <div className="header_left">
            <h4>Welcome to Your Solution!</h4>
            <p>Manage your profile and stay connected.</p>
        </div>
        <div className="header_right">
            <div className="header_right_img"></div>
            <div className="header_right_txt">
                <h4>Scott Michall</h4>
                <p>Beaconhills@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
