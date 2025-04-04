import React from 'react'
import { MdEmail } from "react-icons/md";
import "../styles/emailPage.css"
import { useNavigate } from 'react-router';

const EmailPage = () => {
  const navigate = useNavigate();
  const handleResendLink = () => {
    navigate("/email_verify");
  }
  return (
    <div className='email_body'>
      <div className="email_card">
        <div className="email_icon_holder">
            <MdEmail className='email_icon'/>
        </div>
        <h2>We sent you an email</h2>
        <h4>Please check your email inbox for a verification link sent from us.</h4>
        <div className="email_form">
        <div class="floating-label">
             <input type="email" id="email" placeholder=" " required  className='form_input'/>
             <label for="email" className='formLabel'>Email</label>
        </div>
        <div className="resend_card">
            <h4>Didn’t receive any email? </h4>
            <button className='resend_btn' onClick={handleResendLink}>Resend Link</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmailPage
