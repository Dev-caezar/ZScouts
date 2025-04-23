import { useState, useEffect } from "react"
import "../styles/forgotPassword.css"
import { IoMdLock } from "react-icons/io"
import { useNavigate } from "react-router"
import axios from "axios"
import { Flex, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { toast } from "react-toastify"

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    setEmail("")
    setError("")
  }, [])

  const handleChange = (e) => {
    setEmail(e.target.value)
    setError("") 
  }

  const handleLogin = () => {
    navigate("/login_option")
  }

  const BASE_URL = "https://zscouts.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Email is required")
      return
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format")
      return
    }

    setLoading(true)
    setError("")
    setMessage("")

    try {
      const res = await axios.post(`${BASE_URL}/api/players/forgot-password`, { email })
      setMessage(res.data.message)
      toast.success(res.data.message)
      setEmail("")
      setTimeout(() => {
        // navigate("/email_notify")
      }, 2000)
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />

  return (
    <div className="forgot_body">
      <div className="forgot_card">
        <div className="email_icon_holder">
          <IoMdLock className="email_icon" />
        </div>
        <h2>Forgot password</h2>
        <h4>Enter your email to get a reset link and regain access</h4>

        <form className="forgot_form" onSubmit={handleSubmit} autoComplete="off" noValidate spellCheck="false">
          <div className="playerlogin_floating-label">
            <input
              type="email"
              id="email"
              placeholder=" "
              className={`plogin_input ${error ? "error" : ""}`}
              name="reset_email"
              value={email}
              onChange={handleChange}
              autoComplete="new-email"
            />
            <label htmlFor="email" className="plogin_Label">
              Email
            </label>
            {/* {error && <p className="error_message">{error}</p>}
            {message && <p className="success_message">{message}</p>} */}
          </div>

          <div className="resend_card">
            <h4>
              Already have an account?{" "}
              <span onClick={handleLogin} style={{ cursor: "pointer" }}>
                Login here
              </span>
            </h4>
            <button type="submit" className="reset_btn" style={{ cursor: "pointer" }} disabled={loading}>
              {loading ? 
              <Flex align="center" justify="center" style={{ height: "100%" }}>
                <Spin indicator={loadingIcon} />
              </Flex> : 
            "Reset password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
