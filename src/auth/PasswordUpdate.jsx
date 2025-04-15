import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import "../styles/passwordUpdate.css"

const PasswordUpdate = () => {
  return (
    <div className='updatepass_body'>
      <div className="updatepassword_card">
       <PiSealCheckFill className='verify_icon'/>
        <h2>Password Updated</h2>
        <h4>You can now log in with your new password.</h4>
        <button className='updated_btn'>Login</button>
      </div>
    </div>
  )
}

export default PasswordUpdate
