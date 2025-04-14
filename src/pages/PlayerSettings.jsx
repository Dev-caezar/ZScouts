import React, { useState } from 'react'
import '../styles/playersettings.css'
import { TiPlus } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa6";
import DeactivatePopup from '../components/DeactivatePopup';
import { toast } from 'react-toastify';

const PlayerSettings = () => {

  const [imageValue, setImageValue] = useState( localStorage.getItem('profileImage') || null)

  const [isPopUpOpen, setIsPopupOpen] = useState(false)

  
  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
          const persistimageurl = reader.result;
          setImageValue(persistimageurl);
          localStorage.setItem("profileImage", persistimageurl);
      };
      reader.readAsDataURL(file)
    } else {
      toast.warning("Please upload a valid image file.")
    }
   
  }


  return (
    <div className='player-settings-main' >
      <div className='player-settings-main-wrap'>
        <DeactivatePopup isopen={isPopUpOpen} onclose={()=>setIsPopupOpen(false)} >
          <div className='deactivate-pop-up-inner'></div>
        </DeactivatePopup>
        <div className='player-settings-main-wrap-header'>
          <h1>Account settings</h1>
        </div>
        <div className='setting-profile-picture-div'>
          <div className='player-settings-main-inner'>
            <div className='player-settings-main-inner-1'>
              <img src={imageValue} alt="upload your image" />
              <div className='player-setting-upload-icon'>
                <input type="file" id='l' hidden onChange={getImageUrl} />
                <label htmlFor="l" ><TiPlus style={{cursor: "pointer"}}/></label>
              </div>
            </div>
            <div className='player-settings-main-inner-2'>
              <p style={{fontWeight: "600", color: "#333333"}}>Osuji Wisdom</p>
              <p style={{fontSize: "11px", fontWeight: "600", color: "gray"}}>wisdomosuji26@gmail.com</p>
              <p onClick={()=>setIsPopupOpen(true)} style={{textDecoration: "underline", color: "red", fontSize: "13px", cursor: "pointer", fontWeight: "500"}}>Deactivate account</p>
            </div>
          </div>
        </div>
        <div className='player-settings-main-form'>
          <div className='personal-details-div'>
            <div className='personal-details-div-top'>Personal Data</div>
            <div className='personal-details-div-bottom'>
              <form className='personal-details-form'>
                <div className='personal-details-form-wrap'>
                  <div className='personal-details-form-fullname'>
                    <div className='personal-details-form-name'>Full name</div>
                    <div className='personal-details-form-input'>
                      <input type="text" placeholder='Enter your fullname...' className='my-personal-input'/>
                    </div>
                    <div className='personal-details-error-div'></div>
                  </div>
                  <div className='personal-details-form-email'>
                  <div className='personal-details-form-name'>Email</div>
                    <div className='personal-details-form-input'>
                      <input type="email" placeholder='Enter your email...' className='my-personal-input'/>
                    </div>
                    <div className='personal-details-error-div'></div>
                  </div>
                  <div className='personal-details-form-button-div'>
                    <button className='personal-detail-save-changes-btn'>Save change</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='change-password-div'>
          <div className='change-password-div-top'>Change password</div>
            <div className='change-pasword-div-bottom'>
              <form className='change-password-div-form'>
                <div className='change-password-form-wrap'>
                  <div className='change-password-old-password'>
                    <div className='change-password-old-password-top'>Old password</div>
                    <div className='change-password-old-password-bottom'>
                      <div className='change-password-old-password-bottom-1'>
                        <input type="password" className='my-change-password-input' placeholder='Enter password'/>
                      </div>
                      <div className='change-password-old-password-bottom-2'>
                        <FaRegEye style={{cursor: "pointer"}}/>
                      </div>
                    </div>
                  </div>
                  <div className='change-password-old-password'>
                    <div className='change-password-old-password-top'>New password</div>
                    <div className='change-password-old-password-bottom'>
                      <div className='change-password-old-password-bottom-1'>
                        <input type="password" className='my-change-password-input' placeholder='Enter password'/>
                      </div>
                      <div className='change-password-old-password-bottom-2'>
                        <FaRegEye style={{cursor: "pointer"}}/>
                      </div>
                    </div>
                  </div>
                  <div className='change-password-old-password'>
                    <div className='change-password-old-password-top'>Comfirm password</div>
                    <div className='change-password-old-password-bottom'>
                      <div className='change-password-old-password-bottom-1'>
                        <input type="password" className='my-change-password-input' placeholder='Enter password'/>
                      </div>
                      <div className='change-password-old-password-bottom-2'>
                        <FaRegEye style={{cursor: "pointer"}}/>
                      </div>
                    </div>
                  </div>
                  <div className='change-pasword-btn'>
                    <button className='change-password-btn-main'>Change</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='subscription-div-plan'>
          <div className='subscription-div-plan-wrap'>
            <div className='subscription-div-plan-top'>Subscription</div>
            <div className='subscription-div-plan-middle'>
              <div className='subscription-div-plan-middle-wrap'>
                <div className='youre-on-a-fee-plan-top'>You're on the Free Plan</div>
                <div className='youre-on-a-fee-plan-middle'>unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</div>
                <div className='youre-on-a-fee-plan-bottom'>
                  <button className='upgrade-to-premium-btn'>Upgrade to premium</button>
                </div>
              </div>
            </div>
            <div className='subscription-div-plan-bottom3-footer'>
              <div className='all-right-reserved-and-privacy-and-terms'>
                <div className='all-right-reserved'>©2025 Zcout | All rights reserved</div>
                <div className='privacy-and-terms'><p>Privacy</p>
                <p>Terms</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerSettings
