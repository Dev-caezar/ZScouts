import { useState } from 'react';
import React from 'react'
import '../styles/playerpersonalprofile.css';
import PaymentModal from "./PaymentModal";

const PlayerPersonalProfile = () => {
const [showModal, setShowModal] = useState(false);



  return (
    <div className='personal_wrapper'>
          <img src="/lets-icons_back.svg" alt="Back" className="back_icon" />

        <div className='player_profile'>
            <div className='player_profileicon'>

                </div>

                <div className='player_profile_details'>
            <h2 className='playerprofile_name'>Michael Onyekachi</h2>
          <p className='playerprofile_info'>Striker</p>
          <p className='playerprofile_age'>27 yrs</p>
          <div className='playerprofile_stars'>
    {[...Array(5)].map((_, index) => (
      <img key={index} src="/emojione_star.svg" alt="star" className="star_icon" />
    ))}
  </div>
            </div>

        </div>
     <div className='playerprofile_plan'>
        <div className='plan_text'>
            <h3 className='plantext_holder'>You're on the Free Plan</h3>
        </div>
        <div className='plan_access_note'>
            
            <p className='plan_access'>To access Player's contact information, update to premium</p>

            <button className='upgrade-button'
             onClick={() => setShowModal(true)}>
            Upgrade to premium
            </button>
            </div>

     </div>
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}

      <div className='personal-info'>
      

  <div className="section_card">
    <h3 className="section_title">Personal Information</h3>
    <div className="grid_container">
      <div className="info_item"><p className="label">Full Name</p><p className="value">Michael Onyekachi</p></div>
      <div className="info_item"><p className="label">Age</p><p className="value">27</p></div>
      <div className="info_item"><p className="label">Nationality</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Height (cm)</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Weight (kg)</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Preferred Foot</p><p className="value">-</p></div>
    </div>
  </div>


  <div className="section_card">
    <h3 className="section_title">Football Profile</h3>
    <div className="grid_container">
      <div className="info_item"><p className="label">Primary Position</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Secondary Position</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Current Club/Academy</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Strengths</p><p className="value">-</p></div>
    </div>
  </div>

  <div className="section_card">
    <h3 className="section_title">Club & Coach History</h3>
    <div className="grid_container">
      <div className="info_item"><p className="label">Coach Name</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Coach Phone Number</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Coach Contact Email</p><p className="value">-</p></div>
    </div>
  </div>


  <div className="section_card">
    <h3 className="section_title">Medical & Fitness Information</h3>
    <div className="grid_container">
      <div className="info_item"><p className="label">Do you follow a diet plan?</p><p className="value">-</p></div>
    </div>
  </div>

  <div className="section_card">
    <h3 className="section_title">Other Information</h3>
    <div className="grid_container">
      <div className="info_item"><p className="label">Are you open to trials?</p><p className="value">-</p></div>
      <div className="info_item"><p className="label">Are you willing to relocate for opportunities?</p><p className="value">-</p></div>
    </div>
  </div>

</div>
    </div>
  )
}

export default PlayerPersonalProfile;
