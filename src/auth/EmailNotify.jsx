import React from 'react'
import "../styles/emailNotify.css"
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router'

const EmailNotify = () => {
    const navigate = useNavigate()
    const handleResendLink = () => {
        navigate("/reset_password")
    }
  return (
     <div className='emailNotify_body'>
          <div className="emailNotify_card">
            <div className="emailNotify_icon_holder">
                <MdEmail className='emailNotify_icon'/>
            </div>
            <h2>We sent you an email</h2>
            <h4>Please check your email inbox for a reset your password sent from us.</h4>
            <div className="emailNotify_form">
            <div class="notifyFloating-label">
                 <input type="email" id="email" placeholder=" " required  className='notify_input'/>
                 <label for="email" className='notifyLabel'>Email</label>
            </div>
            <div className="resend_card">
                <h4>Didn’t receive any email? </h4>
                <button style={{cursor: "pointer"}} className='resend_btn' onClick={handleResendLink}>Resend Link</button>
            </div>
            </div>
          </div>
        </div>
  )
}

export default EmailNotify
