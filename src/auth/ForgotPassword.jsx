import React from 'react'
import "../styles/forgotPassword.css"
import { IoMdLock } from "react-icons/io";
import { useNavigate } from 'react-router'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const handleSignup =()=>{
    navigate("/login_option")
  }
  const handleResetLink =()=>{
    navigate("/email_notify")
  }
  return (
    <div className='forgot_body'>
          <div className="forgot_card">
            <div className="email_icon_holder">
                <IoMdLock className='email_icon'/>
            </div>
            <h2>Forgot Password</h2>
            <h4>Enter your email to get a reset link and regain access</h4>
            <div className="forgot_form">
            <div class="floating-label">
                 <input type="email" id="email" placeholder=" " required  className='form_input'/>
                 <label for="email" className='formLabel'>Enter your Email</label>
            </div>
            <div className="resend_card">
                <h4>Already have an account? <span onClick={handleSignup}>login here</span> </h4>
                <button className='reset_btn' onClick={handleResetLink}>Send Link</button>
            </div>
            </div>
          </div>
        </div>
  )
}

export default ForgotPassword
