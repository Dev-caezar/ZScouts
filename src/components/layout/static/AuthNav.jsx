import React from 'react'
import "../../../styles/auth_nav.css"

const AuthNav = () => {
  return (
     <div className="nav_body">
                <div className="image_header">
                   <div className="img_headerwrapper">
                   <div className="auth_image_holder">
                        <img src="/src/assets/public/auth_logo.png" alt="" />
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
