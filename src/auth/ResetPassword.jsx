import React, { useState } from 'react'
import "../styles/resetPassword.css"
import { useNavigate, useParams } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Flex, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const ResetPassword = () => {
  const token = useParams()
  const BASE_URL = "https://zscouts.onrender.com"

  const navigate = useNavigate()
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      setLoading(true)
      setError('')
      const response = await axios.post(`${BASE_URL}/api/scouts/reset-password/${token}`, {
        password: newPassword
      })

      setSuccess("Password reset successful!")
      toast.success(success)
      setLoading(false)

      setTimeout(() => {
        navigate("/login_option")
      }, 2000)

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.")
      console.log(err.response?.data?.message)
      toast.error(err.response?.data?.message)
      setLoading(false)
    }
  }
  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />


  return (
    <div className='reset_password_body'>
      <div className="register_card">
        <div className="form_head">
          <h2>Create a New Password</h2>
          <p>Make it strong & secure. You got this!</p>
        </div>

        <form className='login_form_body' onSubmit={handleResetPassword}>
          <div className="floating-label">
            <input 
              type={!showNewPass ? "password" : "text"} 
              id="newPassword" 
              placeholder=" " 
              required  
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='form_input'
            />
            <label htmlFor="newPassword" className='formLabel'>New Password</label>
            {showNewPass 
              ? <FaRegEyeSlash className='eye' onClick={() => setShowNewPass(!showNewPass)} style={{cursor: "pointer"}}/> 
              : <FaRegEye className='eye' onClick={() => setShowNewPass(!showNewPass)} style={{cursor: "pointer"}}/>
            }
          </div>

          <div className="floating-label">
            <input 
              type={!showConfirmPass ? "password" : "text"} 
              id="confirmPassword" 
              placeholder=" " 
              required  
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='form_input'
            />
            <label htmlFor="confirmPassword" className='formLabel'>Confirm Password</label>
            {showConfirmPass 
              ? <FaRegEyeSlash className='eye' onClick={() => setShowConfirmPass(!showConfirmPass)} style={{cursor: "pointer"}}/> 
              : <FaRegEye className='eye' onClick={() => setShowConfirmPass(!showConfirmPass)} style={{cursor: "pointer"}}/>
            }
          </div>

          <button type="submit" className='register_button' style={{cursor: "pointer"}} disabled={loading}>
            {loading ? 
            <Flex align="center" justify="center" style={{ height: "100%" }}>
              <Spin indicator={loadingIcon} />
            </Flex> : 
             "Create Password"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
