import React, { useState } from 'react';
import "../styles/playerProfile.css"
import Profiletracker from '../components/layout/static/Profiletracker';
import { Box, Rating } from '@mui/material';

const PlayerProfile = () => {
  const [authenticated, setAuthenticated] = useState(false)
  return (
    <div className='playerProfile_body'>
      <div className="profile_wrapper">
        {
          !authenticated?
          <Profiletracker />:
          <div className="completed_profile">

          </div>
        }
        <div className="profile_wrapper_card">
          <div className="user_card">
            <div className="user_image"></div>
            <div className="user_details">
              <h4>Michael Onyekachi</h4>
              <h5>Striker</h5>
              <p>27 years</p>
              <Box>
                <Rating name="legend" value={2} disabled/>
              </Box>
            </div>
          </div>
          <div className="player_personal_details">
            <div className="details_top">
              <h4>Personal Information</h4>
            </div>
            <div className="details_bottom">
              <div className="info">
                <h4>Full Name</h4>
                <p>Michael Onyekachi</p>
              </div>
              <div className="info">
                <h4>Age</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Nationality</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Gender</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Height(CM)</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Weight(KG)</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Preferred Foot</h4>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Contact Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info">
                <h4>Email Address</h4>
                <p>michaelonyekachi16@gmail.com</p>
              </div>
              <div className="info">
                <h4>Phone Number</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Home Address</h4>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Football Profile</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info">
                <h4>Primary Position</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Secondary Position</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Current Club/Academy</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Strengths</h4>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Medical & Fitness Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info">
                <h4>Do you follow a diet plan?</h4>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Coach Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info">
                <h4>Contact Info.*</h4>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Other Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info">
                <h4>Are you open to trials?</h4>
                <p>-</p>
              </div>
              <div className="info">
                <h4>Are you willing to relocate for opportunities?</h4>
                <p>-</p>
              </div>
            </div>
          </div>
         {
           authenticated? 
          <div className="player_contact_details">
          <div className="plan_top">
            <h4>You’re on the Free Plan</h4>
            <p>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</p>
          </div>
          <div className="plan_bottom">
            <button className='premium_cta'>Upgrade to premium</button>
          </div>
        </div>:
        null
         }
          <div className="player_video_profile">
            {
              authenticated? 
             <div className="video_top">
              <h4>You’re on the Free Plan</h4>
            </div>:
            null
            }
            <div className="video_bottom">
              <div className="video_bottom_text">
                <h4>Videos</h4>
              </div>
              <div className="bottom_video_card"></div>
            </div>
          </div>
          <button className='complete_cta'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfile
