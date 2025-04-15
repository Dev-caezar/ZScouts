import { useState, useEffect } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/scoutregister.css"

const ScoutRegister = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setRegister({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }, [])

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))  
  }

  const validateForm = () => {
    const formErrors = {}

    if (!register.fullname.trim()) formErrors.fullname = "Full name is required"

    if (!register.email.trim()) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(register.email)) {
      formErrors.email = "Invalid email format"
    }

    if (!register.password) {
      formErrors.password = "Password is required"
    } else if (register.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters"
    }

    if (!register.confirmPassword) {
      formErrors.confirmPassword = "Please confirm your password"
    } else if (register.password !== register.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const BASE_URL = "https://zscouts.onrender.com/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setLoading(true)
      try {
        const response = await axios.post(`${BASE_URL}/scouts/register`, register)
        console.log("Registration successful:", response.data)
        navigate("/email_notify")
      } catch (error) {
        console.error("Registration failed:", error.response?.data || error.message)
        if (error.response && error.response.data) {
          const apiErrors = error.response.data.errors
          setErrors((prev) => ({ ...prev, ...apiErrors }))
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "Registration failed. Please try again later.",
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

  const navigateToLogin = () => {
    navigate("/scout_login")
  }

  return (
    <div className='scout_register_body'>
      <div className="scout_register_card">
        <div className="scout_form_head">
          <h2>Create An Account</h2>
          <p>Create your profile and connect with Players worldwide.</p>
        </div>

        <form className='scout_form_body' onSubmit={handleSubmit} autoComplete="off">
          <div className="scout_floating-label">
            <input 
              type="text" 
              id="fullName" 
              placeholder=" " 
              className={`scout_form_input ${errors.fullname ? "error" : ""}`}
              name='fullname'
              value={register.fullname}
              onChange={handleChange}
              autoComplete="off"
            />
            <label htmlFor="fullName" className='scout_formLabel'>Enter Full Name</label>
            {errors.fullname && <p className="error_message">{errors.fullname}</p>}
          </div>

          <div className="scout_floating-label">
            <input 
              type="email" 
              id="email" 
              placeholder=" " 
              className={`scout_form_input ${errors.email ? "error" : ""}`}
              name='email'
              value={register.email}
              onChange={handleChange}
              autoComplete="new-email"
            />
            <label htmlFor="email" className='scout_formLabel'>Email</label>
            {errors.email && <p className="error_message">{errors.email}</p>}
          </div>

          <div className="scout_floating-label">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              placeholder=" " 
              className={`scout_form_input ${errors.password ? "error" : ""}`}
              name='password'
              value={register.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <label htmlFor="password" className='scout_formLabel'>Password</label>
            {showPassword
              ? <FaRegEyeSlash className='eye' onClick={togglePasswordVisibility} />
              : <FaRegEye className='eye' onClick={togglePasswordVisibility} />}
            {errors.password && <p className="error_message">{errors.password}</p>}
          </div>

          <div className="scout_floating-label">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              id="confirmPassword" 
              placeholder=" " 
              className={`scout_form_input ${errors.confirmPassword ? "error" : ""}`}
              name='confirmPassword'
              value={register.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <label htmlFor="confirmPassword" className='scout_formLabel'>Confirm Password</label>
            {showConfirmPassword
              ? <FaRegEyeSlash className='eye' onClick={toggleConfirmPasswordVisibility} />
              : <FaRegEye className='eye' onClick={toggleConfirmPasswordVisibility} />}
            {errors.confirmPassword && <p className="error_message">{errors.confirmPassword}</p>}
          </div>

          <div className="terms_card">
            <input type="checkbox" id="terms" className='checkbox' required />
            <p>I agree to <span>Terms & Conditions</span></p>
          </div>

          <button type='submit' className='scout_register_button' disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="second_option">
          <div className="line"></div>
          <h4>OR</h4>
          <div className="line"></div>
        </div>

        <button className='google_button' onClick={handleGoogleSignup}>
          <FcGoogle />
          <p>Sign up with Google</p>
        </button>

        <div className="sform_footer">
          <h4>Already have an account? <span onClick={navigateToLogin}>login here.</span></h4>
          <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
      </div>
    </div>
  )
}

export default ScoutRegister
