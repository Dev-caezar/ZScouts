import React, { useState } from 'react'
import "../styles/scoutregister.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'

const ScoutRegister = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
      const handlePassword =()=>{
        setShowPass((prev)=> !prev)
      }
      const handleRegisterSuccess =()=>{
        navigate("/email_page")
      }
      const handleSuccess =()=>{
        navigate("/player_profile")
      }
  return (
    <div className='scout_register_body'>
        <div className="scout_register_card">
                <div className="scout_form_head">
                  <h2>Create An Account</h2>
                  <p>Create your profile and connect with Players worldwide.</p>
                </div>
                <form className='scout_form_body' action="">
                <div class="scout_floating-label">
                    <input type="text" id="fullName" placeholder=" " required  className='scout_form_input'/>
                    <label for="fullName" className='scout_formLabel'>Enter Full Name</label>
                </div>
                <div class="scout_floating-label">
                    <input type="email" id="email" placeholder=" " required  className='scout_form_input'/>
                    <label for="email" className='scout_formLabel'>Email</label>
                </div>
                <div class="scout_floating-label">
                    <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='scout_form_input'/>
                    <label for="password" className='scout_formLabel'>Password </label>
                   {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
                    <FaRegEye className='eye' onClick={handlePassword}/>}
                </div>
                <div class="scout_floating-label">
                    <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='scout_form_input'/>
                    <label for="password" className='scout_formLabel'>Confirm Password </label>
                   {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
                    <FaRegEye className='eye' onClick={handlePassword}/>}
                    <div className="terms_card">
                    <input type="checkbox" name="" id="" className='checkbox'/>
                    <p>I agree to <span>Terms & Conditions</span></p>
                  </div>
                </div>
                <button className='scout_register_button' onClick={handleRegisterSuccess}>Create Account</button>
                </form>
                <div className="second_option">
                  <div className="line"></div>
                  <h4>OR</h4>
                  <div className="line"></div>
                </div>
                <button className='google_button'>
                  <FcGoogle/>
                  <p>Sign up with Google</p>
                </button>
                <div className="form_footer">
                <h4>Already have an account? <span>login here.</span></h4>
                <h4>© 2025 ZScouts. All rights reserved</h4>
                </div>
               </div>

    </div>
  )
}

export default ScoutRegister
