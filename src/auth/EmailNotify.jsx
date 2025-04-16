import React, { useState } from 'react'
import "../styles/emailNotify.css"
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router'

const EmailNotify = () => {
    const navigate = useNavigate()


    const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)

    if (!value) {
      setError('Please enter your email')
    } else if (!validateEmail(value)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
    }
  }

  const handleResendLink = () => {
    if (!email) {
      setError('Please enter your email')
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
      navigate("/reset_password")
    }
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
                 <input type="email" id="email" placeholder=" " required  className={`notify_input ${error ? 'error-border' : ''}`} value={email} onChange={handleChange} />
                 <label for="email" className='notifyLabel'>Email</label>
                 {error && <small className="error_msg">{error}</small>}
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
