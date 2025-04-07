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
    <div>
      Forgot password
    </div>
  )
}

export default ForgotPassword
