import React from 'react'
import "../styles/oneplayerprofile.css"
import { TbArrowBackUp } from 'react-icons/tb'
import { IoIosStar } from 'react-icons/io'

const OnePlayerProfile = () => {
  return (
    <div className='OnePlayerProfile'>
        <div className='OnePlayerProfile-wrap'>
            <div className='OnePlayerProfile-top'>
                <div className='OnePlayerProfile-top-1'>
                    <button className='OnePlayerProfile-top-button'><TbArrowBackUp/></button>
                </div>
                <div className='OnePlayerProfile-top-2'>
                  <div className='OnePlayerProfile-top-2-inner'>
                    <div className='OnePlayerProfile-top-2-inner-1'>
                      <img src="/src/assets/amadiimage.png" alt="" />
                    </div>
                    <div className='OnePlayerProfile-top-2-inner-2'>
                      <div className='OnePlayerProfile-top-2-inner-2-top'>Amadi Emmanuel</div>
                      <div className='OnePlayerProfile-top-2-inner-2-position'>Striker</div>
                      <div className='OnePlayerProfile-top-2-inner-2-years'>97 Years</div>
                      <div className='OnePlayerProfile-top-2-inner-2-rating'><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='upgrade-to-premium-div'>
              <div className='upgrade-to-premium-div-wrap'>
                <div className='upgrade-to-premium-div-wrap-1'><p>You're on the Free plan</p></div>
                <div className='upgrade-to-premium-div-wrap-2'><p>To access Player"s contact information, upgrade to premium</p></div>
                <div className='upgrade-to-premium-div-wrap-3'>
                  <button className='upgrade-to-premium-div-wrap-button'>Upgrade to premium</button>
                </div>
              </div>
            </div>
            <div className="player_personal_details">
            <div className="details_top">
              <h4 style={{fontWeight: "600"}}>Personal Information</h4>
            </div>
            <div className="details_bottom">
              <div className="info"><h4>Full Name</h4><p>--</p></div>
              <div className="info"><h4>Age</h4><p>--</p></div>
              <div className="info"><h4>Nationality</h4><p>--</p></div>
              <div className="info"><h4>Height (CM)</h4><p>--</p></div>
              <div className="info"><h4>Weight (KG)</h4><p>--</p></div>
              <div className="info"><h4>Preferred Foot</h4><p>--</p></div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top"><h4 style={{fontWeight: "600"}}>Football Profile</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Primary Position</h4><p>--</p></div>
              <div className="info"><h4>Secondary Position</h4><p>--</p></div>
              <div className="info"><h4>Current Club/Academy</h4><p>--</p></div>
              <div className="info"><h4>Strengths</h4><p>--</p></div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top"><h4 style={{fontWeight: "600"}}>Club & Coach History</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Coach Name</h4><p>--</p></div>
              <div className="info"><h4>Coach phone Number</h4><p>--</p></div>
               <div className="info"><h4>Coach contact Email</h4><p>--</p></div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top"><h4 style={{fontWeight: "600"}}>Medical & Fitness Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Do you follow a diet plan?</h4><p>--</p></div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top"><h4 style={{fontWeight: "600"}}>Other Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Are you Open to Trials?</h4><p>--</p></div>
              <div className="info"><h4>Are you Willing to Relocate for opportunities?</h4><p>--</p></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OnePlayerProfile