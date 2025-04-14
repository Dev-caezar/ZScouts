import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../styles/register.css"
import { useNavigate } from 'react-router';

const RegisterPlayer = () => {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();
  const handlePassword =()=>{
    setShowPass((prev)=> !prev)
  }
  const handleLogin =()=>{
    navigate("/login_option")
  }
  return (
    <div className='player_register_body'>
       <div className="player_register_card">
        <div className="player_form_head">
          <h2>Create An Account</h2>
          <p>Create your profile and connect with scouts worldwide.</p>
        </div>
        <form className='player_form_body' action="">
        <div class="p_floating-label">
            <input type="text" id="fullName" placeholder=" " required  className='player_form_input'/>
            <label for="fullName" className='player_formLabel'>Enter Full Name</label>
        </div>
        <div class="p_floating-label">
            <input type="email" id="email" placeholder=" " required  className='player_form_input'/>
            <label for="email" className='player_formLabel'>Email</label>
        </div>
        <div class="p_floating-label">
            <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='player_form_input'/>
            <label for="password" className='player_formLabel'>Password </label>
           {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
            <FaRegEye className='eye' onClick={handlePassword}/>}
        </div>
        <div class="p_floating-label">
            <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='player_form_input'/>
            <label for="password" className='player_formLabel'>Confirm Password </label>
           {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
            <FaRegEye className='eye' onClick={handlePassword}/>}
            <div className="terms_card">
            <input type="checkbox" name="" id="" className='player_checkbox'/>
            <p>I agree to <span>Terms & Conditions</span></p>
          </div>
        </div>
        <button className='player_register_button'>Create Account</button>
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
        <h4>Already have an account? <span onClick={handleLogin}>login here.</span></h4>
        <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
       </div>
    </div>
  )
}

export default RegisterPlayer
