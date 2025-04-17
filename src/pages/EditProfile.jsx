import React, { useState } from 'react';
import "../styles/editProfile.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Select } from 'antd';
import axios from 'axios';



const SelectDropdown = ({ placeholder, options, width, onChange, value }) => (
  <Select
    showSearch
    placeholder={placeholder}
    optionFilterProp="label"
    onChange={onChange}
    style={{ width }}
    options={options}
    value={value}
  />
);

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
].map(month => ({ value: month, label: month }));

const days = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1
}));

const years = Array.from({ length: 30 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year, label: year };
});

const EditProfile = () => {
  const [player, setPlayer] = useState({
    fullName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    nationality: "",
    gender: "",
    height: "",
    weight: "",
    preferredFoot: "",
    email: "",
    phone: "",
    address: "",
    primaryPosition: "",
    secondaryPosition: "",
    currentClub: "",
    dietPlan: "",
    coachContact: "",
    openToTrials: "",
    willingToRelocate: ""
  });

  const handleChange = (key, value) => {
    setPlayer(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted player profile:", player);
    // Send player object to API here if needed
  };

  return (
    <div className='player_kyc_body'>
      <div className="player_kyc_wrapper">
        <div className="back_card">
          <IoReturnUpBackOutline className='back_icon' />
        </div>
        <Profiletracker />
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Personal Data</h4>
          </div>
          <div className="edit_card_bottom">
            <div className="edit_input_container">
              <h4>Full name*</h4>
              <input 
                type="text"
                value={player.fullName}
                onChange={e => handleChange("fullName", e.target.value)}
                placeholder='Michael Onyekachi'
                className='edit_input'
              />
            </div>
            <div className="date_input_container">
              <h4>Date of birth*</h4>
              <div className="dob_card">
                <SelectDropdown 
                  placeholder="Month" 
                  options={months} 
                  width={110}
                  value={player.birthMonth}
                  onChange={value => handleChange("birthMonth", value)}
                />
                <SelectDropdown 
                  placeholder="Day" 
                  options={days} 
                  width={70}
                  value={player.birthDay}
                  onChange={value => handleChange("birthDay", value)}
                />
                <SelectDropdown 
                  placeholder="Year" 
                  options={years} 
                  width={90}
                  value={player.birthYear}
                  onChange={value => handleChange("birthYear", value)}
                />
              </div>
            </div>
            <div className="edit_input_container">
              <h4>Nationality*</h4>
              <input 
                type="text"
                value={player.nationality}
                onChange={e => handleChange("nationality", e.target.value)}
                placeholder='Enter Nationality'
                className='edit_input'
              />
            </div>
            <div className="gender_input_container">
              <h4>Gender*</h4>
              <Select
                showSearch
                placeholder="Gender"
                optionFilterProp="label"
                value={player.gender}
                onChange={value => handleChange("gender", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                ]}
              />
            </div>
            <div className="height_input_container">
              <h4>Height (cm)*</h4>
              <input 
                type="text"
                value={player.height}
                onChange={e => handleChange("height", e.target.value)}
                placeholder='Enter height'
                className='height_input'
              />
            </div>
            <div className="edit_input_container">
              <h4>Weight (kg)*</h4>
              <input 
                type="text"
                value={player.weight}
                onChange={e => handleChange("weight", e.target.value)}
                placeholder='Enter weight'
                className='edit_input'
              />
            </div>
            <div className="edit_input_container">
              <h4>Preferred foot*</h4>
              <Select
                showSearch
                placeholder="Option"
                optionFilterProp="label"
                value={player.preferredFoot}
                onChange={value => handleChange("preferredFoot", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Left', label: 'Left' },
                  { value: 'Right', label: 'Right' },
                  { value: 'Both', label: 'Both' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Contact Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Email address*</h4>
              <input 
                type="text"
                value={player.email}
                onChange={e => handleChange("email", e.target.value)}
                placeholder='Enter email address'
                className='contact_input'
              />
            </div>
            <div className="contact_input_container">
              <h4>Phone number*</h4>
              <input 
                type="text"
                value={player.phone}
                onChange={e => handleChange("phone", e.target.value)}
                placeholder='Enter phone number'
                className='contact_input'
              />
            </div>
            <div className="contact_input_container">
              <h4>Home Address*</h4>
              <input 
                type="text"
                value={player.address}
                onChange={e => handleChange("address", e.target.value)}
                placeholder='Enter house address'
                className='contact_input'
              />
            </div>
          </div>
        </div>

        {/* Football Profile */}
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Football Profile</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Primary position*</h4>
              <input 
                type="text"
                value={player.primaryPosition}
                onChange={e => handleChange("primaryPosition", e.target.value)}
                placeholder='Input position'
                className='contact_input'
              />
            </div>
            <div className="contact_input_container">
              <h4>Secondary position*</h4>
              <input 
                type="text"
                value={player.secondaryPosition}
                onChange={e => handleChange("secondaryPosition", e.target.value)}
                placeholder='Input position'
                className='contact_input'
              />
            </div>
            <div className="contact_input_container">
              <h4>Current Club/Academy*</h4>
              <input 
                type="text"
                value={player.currentClub}
                onChange={e => handleChange("currentClub", e.target.value)}
                placeholder='Enter club/academy'
                className='contact_input'
              />
            </div>
          </div>
        </div>

        {/* Medical & Fitness */}
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Medical & Fitness Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Do you follow a diet plan?*</h4>
              <Select
                showSearch
                placeholder="Option"
                optionFilterProp="label"
                value={player.dietPlan}
                onChange={value => handleChange("dietPlan", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Coach Info */}
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Coach Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Contact Info.*</h4>
              <input 
                type="text"
                value={player.coachContact}
                onChange={e => handleChange("coachContact", e.target.value)}
                placeholder='Enter contact info'
                className='contact_input'
              />
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Other Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Are you open to trials?*</h4>
              <Select
                showSearch
                placeholder="Option"
                optionFilterProp="label"
                value={player.openToTrials}
                onChange={value => handleChange("openToTrials", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
            </div>
            <div className="contact_input_container">
              <h4>Are you willing to relocate for opportunities?*</h4>
              <Select
                showSearch
                placeholder="Option"
                optionFilterProp="label"
                value={player.willingToRelocate}
                onChange={value => handleChange("willingToRelocate", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
            </div>
          </div>
        </div>

        <button className='complete_cta' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditProfile;
