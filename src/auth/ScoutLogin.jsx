import React, { useState } from 'react'
import "../styles/scoutLogin.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const ScoutLogin = () => {
    const [showPass, setShowPass] = useState(false)
            const handlePassword =()=>{
              setShowPass((prev)=> !prev)
            }
  return (
     <div className='scout_login_body'>
         <div className="scout_login_card">
             <div className="scout_login_head">
                <h2>Welcome Back</h2>
                <p>We are so delighted to have you back.</p>
            </div>
         <form className='slogin_form_body' action="">
            <div class="sl_floating-label">
                <input type="email" id="email" placeholder=" " required  className='scout_login_input'/>
                    <label for="email" className='slformLabel'>Email</label>
            </div>
            <div class="sl_floating-label">
                <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='scout_login_input'/>
                <label for="password" className='slformLabel'>Password </label>
                    {showPass? 
                    <FaRegEye className='eye' onClick={handlePassword}/> :
                    <FaRegEyeSlash className='eye' onClick={handlePassword}/>}
            </div>
            <button className='register_button'>Login</button>
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
        <h4>Dont have an account? <span>signup here.</span></h4>
        <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
    </div>
</div>
  )
}

export default ScoutLogin
