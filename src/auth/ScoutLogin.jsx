import { useState } from "react"
import "../styles/scoutLogin.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../global/Fearures"
import { Flex, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const ScoutLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  const togglePasswordVisibility = () => {
    setShowPass((prev) => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const stateKey = name.replace("scout_", "")
    setLogin((prev) => ({ ...prev, [stateKey]: value }))
    setErrors((prev) => ({ ...prev, [stateKey]: "" }))
  }

  const validateForm = () => {
    const formErrors = {}

    if (!login.email.trim()) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(login.email)) {
      formErrors.email = "Invalid email format"
    }

    if (!login.password) {
      formErrors.password = "Password is required"
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const BASE_URL = "https://zscouts.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setLoading(true)
      try {
        const response = await axios.post(`${BASE_URL}/api/scouts/login`, login)
        console.log("Login successful:", response.data)
        dispatch(setUser(response.data))
        navigate("/scout_profile")
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message)
        toast.error("Login failed. Please try again later.")
        if (error.response && error.response.data) {
          const apiErrors = error.response.data.errors
          setErrors((prev) => ({ ...prev, ...apiErrors }))
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "Login failed. Please try again later.",
          }))
        }
      } finally {
        setLoading(false)
      }
    }
  }

  const handleGoogleSignup = () => {
    console.log("Google sign-up clicked")
  }

  const handleLoginRedirect = () => {
    navigate("/scout_register")
  }

  const handleFrgotPass = () => {
    navigate("/forgot_password")
  }

  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />

  return (
    <div className="scout_login_body">
      <div className="scout_login_card">
        <div className="scout_login_head">
          <h2>Welcome Back</h2>
          <p>We are so delighted to have you back.</p>
        </div>

        {errors.general && <div className="general_error">{errors.general}</div>}

        <form className="slogin_form_body" onSubmit={handleSubmit} autoComplete="off" noValidate spellCheck="false">
          <div className="sl_floating-label">
            <input
              type="email"
              id="email"
              placeholder=" "
              className={`scout_login_input ${errors.email ? "error" : ""}`}
              name="scout_email"
              value={login.email}
              onChange={handleChange}
              autoComplete="new-email"
            />
            <label htmlFor="email" className="slformLabel">
              Email
            </label>
            {errors.email && <p className="error_message">{errors.email}</p>}
          </div>
          <div className="sl_floating-label">
            <input
              type={!showPass ? "password" : "text"}
              id="password"
              placeholder=" "
              className={`scout_login_input ${errors.password ? "error" : ""}`}
              name="scout_password"
              value={login.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <label htmlFor="password" className="slformLabel">
              Password
            </label>
            {showPass ? (
              <FaRegEyeSlash style={{ cursor: "pointer" }} className="eye" onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEye style={{ cursor: "pointer" }} className="login_eye" onClick={togglePasswordVisibility} />
            )}
            {errors.password && <p className="error_message">{errors.password}</p>}
            <div className="player_forgot_password">
              <p onClick={handleFrgotPass}>Forgot password?</p>
            </div>
          </div>
          <button type="submit" className="register_button" style={{ cursor: "pointer" }}>
            {loading ? 
            <Flex align="center" justify="center" style={{ height: "100%" }}>
              <Spin indicator={loadingIcon} />
            </Flex>
             : "Login"}
          </button>
        </form>

        <div className="second_option">
          <div className="line"></div>
          <h4>OR</h4>
          <div className="line"></div>
        </div>

        <button style={{ cursor: "pointer" }} className="google_button" onClick={handleGoogleSignup}>
          <FcGoogle />
          <p>Sign up with Google</p>
        </button>

        <div className="form_footer">
          <h4>
            Don't have an account? <span onClick={handleLoginRedirect}>Sign up here.</span>
          </h4>
          <h4>© {new Date().getFullYear()} ZScouts. All rights reserved</h4>
        </div>
      </div>
    </div>
  )
}

export default ScoutLogin
