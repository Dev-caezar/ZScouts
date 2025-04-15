import React from 'react'
import "../styles/emailSuccess.css"
import { PiSealCheckFill } from 'react-icons/pi'

const EmailSuccess = () => {
  return (
    <div className='email_success_body'>
      <div className="email_success_card">
        <PiSealCheckFill className='verify_icon'/>
        <h2>Successful!</h2>
        <h4>A link has successfully been sent to your email inbox.</h4>
        <button className='email_success_btn'>Go to your inbox</button>
      </div>
    </div>
  )
}

export default EmailSuccess
