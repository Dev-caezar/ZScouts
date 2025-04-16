import React, { useState } from 'react'
import "../styles/resetPassword.css"
import { useNavigate, useParams } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'

const ResetPassword = () => {
  const { token } = useParams()
  const BASE_URL = "https://zscouts.onrender.com"

  const navigate = useNavigate()
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.")
      return
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters.")
      return
    }

    try {
      setLoading(true)

      await axios.post(`${BASE_URL}/api/scouts/reset-password/${token}`, {
        password: newPassword
      })

      toast.success("Password reset successful!")

      const timeout = setTimeout(() => {
        navigate("/login")
      }, 2000)

      return () => clearTimeout(timeout)

    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.")
      console.log(err.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

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

          {newPassword && confirmPassword && newPassword !== confirmPassword && (
            <p className="error_message">Passwords do not match.</p>
          )}

          <button 
            type="submit" 
            className='register_button' 
            style={{cursor: "pointer"}} 
            disabled={loading || newPassword !== confirmPassword || newPassword.length < 8}
          >
            {loading ? "Creating..." : "Create Password"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
