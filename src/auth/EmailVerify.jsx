import React, { useEffect, useState } from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import "../styles/emailVerify.css"
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmailVerify = () => {
  const BASE_URL = "https://zscouts.onrender.com"
  const {token} = useParams()
  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${BASE_URL}/api/scouts/verify-email/${token}`)
      toast.success(res?.data?.message)
      setIsVerified(true)
      setTimeout(() => {
        navigate("/login_option")
      }, 4000)
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message || "Verification failed")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleLogin = () => {
    navigate("/login_option")
  }

  if (loading) {
    return (
      <div className='email_verify_body'>
        <div className="verify_card">
          <div className="spinner"></div>
          <h4>Verifying your email...</h4>
        </div>
      </div>
    )
  }

  return (
    <div className='email_verify_body'>
      <div className="verify_card">
        <PiSealCheckFill className='verify_icon' />
        <h2>Verified!</h2>
        <h4>You have successfully verified your account</h4>
        <button style={{ cursor: "pointer" }} className='verify_btn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default EmailVerify
