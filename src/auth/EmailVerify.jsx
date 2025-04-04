import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import "../styles/emailVerify.css"
import { useNavigate } from 'react-router';

const EmailVerify = () => {
    const navigate = useNavigate()
    const handleLogin =()=>{
        navigate("/login_option")
    }
  return (
    <div className='email_verify_body'>
      <div className="verify_card">
        <PiSealCheckFill className='verify_icon'/>
        <h2>Verified!</h2>
        <h4>You have successfully verified your account</h4>
        <button className='verify_btn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default EmailVerify
