import React, { useState } from 'react'
import "../styles/login.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'

const PlayerLogin = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
        const handlePassword =()=>{
          setShowPass((prev)=> !prev)
        }
        const handlesubmit =()=>{
          navigate("/email_notify")
        }
  const handleFrgotPass =()=>{
        navigate("/forgot_password")
  }
  const handleSignup =()=>{
    navigate("/signup_option")
}
  return (
     <div className='player_login_body'>
            <div className="player_login_card">
                    <div className="player_login_head">
                      <h2>Welcome Back</h2>
                      <p>We are so delighted to have you back.</p>
                    </div>
                    <form className='login_form_body' action="">
                      <div class="playerlogin_floating-label">
                        <input type="email" id="email" placeholder=" " required  className='plogin_input'/>
                        <label for="email" className='plogin_Label'>Email</label>
                    </div>
                    <div class="playerlogin_floating-label">
                        <input type={!showPass? "password" : "text"} id="password" placeholder=" " required  className='plogin_input'/>
                        <label for="password" className='plogin_Label'>Password </label>
                       {showPass? <FaRegEyeSlash style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/> :
                        <FaRegEye style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/>}
                    <div className="player_forgot_password">
                      <p onClick={handleFrgotPass}>Forgot password?</p>
                    </div>
                    </div>
                    <button style={{cursor: "pointer"}} className='player_login_button' onClick={()=>navigate("/player_profile")}>Login</button>
                    </form>
                    <div className="second_option">
                      <div className="line"></div>
                      <h4>OR</h4>
                      <div className="line"></div>
                    </div>
                    <button style={{cursor: "pointer"}} className='google_button'>
                      <FcGoogle/>
                      <p>Sign up with Google</p>
                    </button>
                    <div className="form_footer">
                    <h4>Dont have an account? <span onClick={handleSignup}>signup here.</span></h4>
                    <h4>© 2025 ZScouts. All rights reserved</h4>
                    </div>
                   </div>
          </div>
  )
}

export default PlayerLogin
