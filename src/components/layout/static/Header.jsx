import React, { useState } from 'react'
import "../../../styles/header.css"
import { useNavigate } from 'react-router'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";


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
  const [openNav,setOpenNav] = useState(false)
  const handleOpenNav =()=>{
    setOpenNav((prev)=> !prev)
  }
  return (
    <div className='header_body'>
      <div className="header_wrapper">
        <div className="h_logo">
          <div className="z_logo">
            <img src="https://res.cloudinary.com/dmpxlspl8/image/upload/v1744640522/m5r4gkf4coyia5bfkv6d.jpg" alt="" />
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
          <HiMenuAlt3 className='menu_icon'onClick={handleOpenNav}/>
          {
            openNav && (
              <div className="header_modal">
                <div className="header_modal_wrapper">
                  <div className="modal_header">
                    <div className="modal_img">
                      <img src="https://res.cloudinary.com/dmpxlspl8/image/upload/v1744640522/m5r4gkf4coyia5bfkv6d.jpg" alt="" />
                    </div>
                    <MdCancel className='cancel_icon' onClick={handleOpenNav}/>
                  </div>
                  <div className="modal_content">
                    <div className="content_text">
                    <h4 onClick={handleHome}>Home</h4>
                    <h4 onClick={handleAbout}>About us</h4>
                    <h4 onClick={handleContact}>Contact us</h4>
                    </div>
                    <button className='modal_login'>Login</button>
                    <button className='modal_signup'>Sign up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
