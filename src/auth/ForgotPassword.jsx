import { useState, useEffect } from "react"
import "../styles/forgotPassword.css"
import { IoMdLock } from "react-icons/io"
import { useNavigate } from "react-router"

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setEmail("")
    setError("")
  }, [])

  const handleChange = (e) => {
    setEmail(e.target.value)
    setError("") 
  }

  const handleSignup = () => {
    navigate("/login_option")
  }

  const handleLogin = () => {
    navigate("/login_option")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Email is required")
      return
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/email_notify")
    }, 1500)
  }

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
            {error && <p className="error_message">{error}</p>}
          </div>

          <div className="resend_card">
            <h4>
              Already have an account?{" "}
              <span onClick={handleLogin} style={{ cursor: "pointer" }}>
                Login here
              </span>
            </h4>
            <button type="submit" className="reset_btn" style={{ cursor: "pointer" }} disabled={loading}>
              {loading ? "Sending..." : "Reset password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
