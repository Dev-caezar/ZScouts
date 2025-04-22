import React, { useState, useEffect } from "react"
import { MdEmail } from "react-icons/md"
import "../styles/emailpageplayer.css"
import { useNavigate, useParams } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"

const EmailPagePlayer = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(true)
  const [resendEmail, setResendEmail] = useState("")
  const [resending, setResending] = useState(false)

  const BASE_URL = "https://zscouts.onrender.com"
  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${BASE_URL}/api/players/verify-email/${token}`)
      toast.success(res?.data?.message)
      setIsVerified(true)
      setTimeout(() => {
        navigate("/login_option")
      }, 2000)
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message || "Verification failed")
    } finally {
      setLoading(false)
    }
  }
  const handleResendLink = async () => {
    if (!resendEmail.trim()) {
      toast.error("Please enter your email")
      return
    }
    try {
      setResending(true)
      const res = await axios.post(`${BASE_URL}/api/players/resend-verification`, {
        email: resendEmail,
      })
      toast.success(res?.data?.message || "Verification link resent")
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message || "Failed to resend link")
    } finally {
      setResending(false)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="email_body">
      <div className="email_card">
        <div className="email_icon_holder">
          <MdEmail className="email_icon" />
        </div>
        <h2>{loading ? "Verifying..." : isVerified ? "Email Verified!" : "Check your inbox"}</h2>
        <h4>
          {loading
            ? "Please wait while we verify your email."
            : "We sent you a verification link — check your inbox."}
        </h4>

        <div className="email_form">
          <div className="floating-label">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              className="form_input"
              value={resendEmail}
              onChange={(e) => setResendEmail(e.target.value)}
            />
            <label htmlFor="email" className="formLabel">
              Email
            </label>
          </div>

          <div className="resend_card">
            <h4>Didn’t receive any email?</h4>
            <button
              className="resend_btn"
              onClick={handleResendLink}
              disabled={resending}
              style={{ cursor: "pointer" }}
            >
              {resending ? "Resending..." : "Resend Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailPagePlayer
