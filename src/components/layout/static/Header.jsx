import React from 'react'
import "../../../styles/header.css"
import { useNavigate } from 'react-router'
import { HiMenuAlt3 } from "react-icons/hi";


const Header = () => {
  const navigate = useNavigate();
  const handleLogin =()=>{
    navigate("/login_option")
  }
  const handleSignup =()=>{
    navigate("/signup_option")
  }
  const handleHome=()=>{
    navigate("/")
  }
  const handleAbout =()=>{
    navigate("/about_us")
  }
  const handleContact =()=>{
    navigate("/contact_us")
  } 
  return (
    <div className='header_body'>
      <div className="header_wrapper">
        <div className="h_logo">
          <div className="z_logo">
            <img src="/src/assets/public/Zlogo.jpg" alt="" />
          </div>
        </div>
        <div className="h_texts">
          <h4 onClick={handleHome}>Home</h4>
          <h4 onClick={handleAbout}>About us</h4>
          <h4 onClick={handleContact}>Contact us</h4>
        </div>
        <div className="h_buttons">
          <button className='h_login' onClick={handleLogin}> Login</button>
          <button className='h_signup'onClick={handleSignup}>Signup</button>
          <HiMenuAlt3 className='menu_icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header
