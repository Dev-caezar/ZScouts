import React, { useState } from 'react'
import "../styles/resetPassword.css"
import { useNavigate } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ResetPassword = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
        const handlePassword =()=>{
          setShowPass((prev)=> !prev)
        }
    
  return (
   <div className='reset_password_body'>
               <div className="register_card">
                       <div className="form_head">
                         <h2>Create a New Password</h2>
                         <p>Make it strong & secure. You got this!</p>
                       </div>
                       <form className='login_form_body' action="">
                       <div class="floating-label">
                           <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='form_input'/>
                           <label for="password" className='formLabel'>New Password </label>
                          {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
                           <FaRegEye className='eye' onClick={handlePassword}/>}
                       </div>
                       <div class="floating-label">
                           <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='form_input'/>
                           <label for="password" className='formLabel'>Confirm Password </label>
                          {showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
                           <FaRegEye className='eye' onClick={handlePassword}/>}
                       </div>
                       <button className='register_button'>Create Password</button>
                       </form>
                      </div>
             </div>
  )
}

export default ResetPassword
