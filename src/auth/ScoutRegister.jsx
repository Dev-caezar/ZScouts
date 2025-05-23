import { useEffect, useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/scoutregister.css"
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { setScoutDetails } from "../global/Fearures"
import { toast } from "react-toastify"

const ScoutRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
   const [isDisabled, setIsDisabled] = useState(true);

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})

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

useEffect(() => {
  const allFieldsFilled = Object.values(register).every((value) => value.trim() !== "");
  setIsDisabled(!allFieldsFilled);
}, [register]);


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
      formErrors.password = "Password must be at least 8 charactersand must include a number and special character"
    }

    if (!register.confirmPassword) {
      formErrors.confirmPassword = "Please confirm your password"
    } else if (register.password !== register.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match"
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
        const response = await axios.post(`${BASE_URL}/api/scouts/register`, register)
        console.log("Registration successful:", response)
        dispatch(setScoutDetails(response.data.data))
        toast.success("Successfully registered as a scout! Please check your email to verify. ");
        setTimeout(() => {
          navigate("/email_page");
        }, 2000);
        
      } catch (error) {
        console.log("Registration failed:", error.response?.data || error.message)
        if (error.message === "Network Error") {
          toast.error("Oops Network error! Please check your connection and try again.");
        } else {
          toast.error("Registration failed. Please try again later.");
        }

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
        setIsDisabled(false)
      }
    }
  }

  const handleGoogleSignup = () => {
    console.log("Google sign-up clicked")
  }

  const navigateToLogin = () => {
    navigate("/scout_login")
  }
  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />
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
            <p>I agree to  <span>Terms & Conditions</span></p>
          </div>

          <button 
      type='submit' 
     className='scout_register_button'
     disabled={isDisabled || loading}
     style={{
    cursor: isDisabled || loading ? 'not-allowed' : 'pointer',
    backgroundColor: isDisabled ? "#0c8f006e" : "#0C8F00"
    }}
   >
  {loading ? 
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <Spin indicator={loadingIcon} />
    </Flex>
    : 'Create Account'
  }
</button>

        </form>

        <div className="sform_footer">
          <h4>Already have an account? <span onClick={navigateToLogin}>login here.</span></h4>
          <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
      </div>
    </div>
  )
}

export default ScoutRegister