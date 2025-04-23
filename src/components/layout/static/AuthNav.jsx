import React from 'react'
import "../../../styles/auth_nav.css"
import authLogo from "../../../assets/auth_logo.png"
import { useNavigate } from 'react-router'

const AuthNav = () => {
    const nav = useNavigate()
  return (
     <div className="nav_body">
                <div className="image_header">
                   <div className="img_headerwrapper">
                   <div className="auth_image_holder" onClick={()=>nav("/") }>
                        <img src={authLogo} alt="" />
                    </div>
                   </div>
                </div>
                <div className="img_navbody">
                    <div className="img_navwrapper">
                    <div className="content_bold">
                        <h2>Get Discovered. <br /> 
                            Get Signed.
                        </h2>
                    </div>
                    <div className="content_description">
                        <p>Join ZScouts and showcase your talent to top scouts and clubs. 
                            Whether you're a player or a scout, this is where football dreams take off.
                        </p>
                    </div>
                    </div>
                </div>
              </div>
  )
}

export default AuthNav
