import React, { useState } from 'react';
import axios from 'axios';
import "../styles/editProfile.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Flex, Select, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerKyc } from '../global/Player';
import { LoadingOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const players = useSelector((state)=> state.player.playerDetails.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false)
  const [player, setPlayerState] = useState({
    age: "",
    nationality: "",
    gender: "",
    height: "",
    weight: "",
    preferredFoot: "",
    phoneNumber: "",
    homeAddress: "",
    primaryPosition: "",
    secondaryPosition: "",
    currentClub: "",
    ability: "",
    followDiet: "",
    contactInfoOfCoaches: "",
    openToTrials: "",
    willingToRelocate: "",
    media: null,
  });

  const handleChange = (key, value) => {
    setPlayerState(prev => ({ ...prev, [key]: value }));
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    handleChange("media", file);
  };

  const BASE_URL = "https://zscouts.onrender.com";

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const formData = new FormData();
      for (const key in player) {
        formData.append(key, player[key]);
      }

      const response = await axios.post(`${BASE_URL}/api/v1/playerkyc/${players}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log("Player profile submitted:", response.data);
      setLoading(false)
      dispatch(setPlayerKyc(response.data));
      navigate(-1)
      toast.success("Profile submitted successfully!");
    } catch (error) {
      console.error("Error submitting profile:", error);
      setLoading(false)
      toast.error("Failed to submit profile.");
    }
  };
  const handleBack =()=>{
    navigate(-1)
  }

  const loadingIcon = <LoadingOutlined style={{ fontSize: 90, color: "green" }} spin />

  return (
    <div className='player_kyc_body'>
      <div className="player_kyc_wrapper">
        <div className="back_card">
          <IoReturnUpBackOutline className='back_icon' onClick={handleBack}/>
        </div>
        <Profiletracker />
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Personal Data</h4>
          </div>
          <div className="edit_card_bottom">
            <div className="edit_input_container">
              <h4>Ability*</h4>
               <Select
                showSearch
                placeholder="ability"
                optionFilterProp="label"
                onChange={value => handleChange("ability", value)}
                style={{ width: '80%' }}
                value={player.ability}
                options={[
                  { value: 'dribbling', label: 'dribbling' },
                  { value: 'passing', label: 'passing' },
                  { value: 'shooting', label: 'shooting' },
                  { value: 'defending', label: 'defending' },
                  { value: 'speed', label: 'speed' },
                  { value: 'stamina', label: 'stamina' },
                ]}
              />
            </div>
            <div className="date_input_container">
              <h4>Age*</h4>
              <input 
                type="text"
                value={player.age}
                onChange={e => handleChange("age", e.target.value)}
                placeholder='Enter Age'
                className='edit_input'
              />
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
                onChange={value => handleChange("gender", value)}
                style={{ width: '80%' }}
                value={player.gender}
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
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Contact Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Phone number*</h4>
              <input 
                type="text"
                value={player.phoneNumber}
                onChange={e => handleChange("phoneNumber", e.target.value)}
                placeholder='Enter phone number'
                className='contact_input'
              />
            </div>
            <div className="contact_input_container">
              <h4>Home Address*</h4>
              <input 
                type="text"
                value={player.homeAddress}
                onChange={e => handleChange("homeAddress", e.target.value)}
                placeholder='Enter house address'
                className='contact_input'
              />
            </div>
          </div>
        </div>
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Football Profile</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Primary position*</h4>
                <Select
                showSearch
                placeholder="Primary position"
                optionFilterProp="label"
                onChange={value => handleChange("primaryPosition", value)}
                style={{ width: '80%' }}
                value={player.primaryPosition}
                options={[
                  { value: 'GK', label: 'GK' },
                  { value: 'DEF', label: 'DEF' },
                  { value: 'MF', label: 'MF' },
                  { value: 'ST', label: 'ST' },
                ]}
              />
            </div>
            <div className="contact_input_container">
              <h4>Secondary position*</h4>
              <Select
                showSearch
                placeholder="secondary position"
                optionFilterProp="label"
                onChange={value => handleChange("secondaryPosition", value)}
                style={{ width: '80%' }}
                value={player.secondaryPosition}
                options={[
                  { value: 'GK', label: 'GK' },
                  { value: 'DEF', label: 'DEF' },
                  { value: 'MF', label: 'MF' },
                  { value: 'ST', label: 'ST' },
                ]}
              />
            </div>
            <div className="contact_input_container">
              <h4>Current Club/Academy*</h4>
              <input 
                type="text"
                value={player.currentClub}
                onChange={e => handleChange("currentClub", e.target.value)}
                placeholder='Current club/academy'
                className='contact_input'
              />
            </div>
          </div>
        </div>
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
                value={player.followDiet}
                onChange={value => handleChange("followDiet", value)}
                style={{ width: '80%' }}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Coach Information</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <h4>Contact Info.*</h4>
              <input 
                type="text"
                value={player.contactInfoOfCoaches}
                onChange={e => handleChange("contactInfoOfCoaches", e.target.value)}
                placeholder='Contact info'
                className='contact_input'
              />
            </div>
          </div>
        </div>
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
              <h4>Are you willing to relocate?*</h4>
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
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Upload Media</h4>
          </div>
          <div className="contact_card_bottom">
            <div className="contact_input_container">
              <input 
                type="file"
                accept="video/*,image/*"
                onChange={handleMediaUpload}
                className='contact_input'
              />
              {player.media && (
                <video 
                  controls 
                  src={URL.createObjectURL(player.media)} 
                  style={{ marginTop: '10px', maxWidth: '20%' }}
                />
              )}
            </div>
          </div>
        </div>
        <button className='complete_cta' onClick={handleSubmit}>
          {
            loading? 
            <div className="loading_modal">
              <Flex>
                 <Spin indicator={loadingIcon} />
              </Flex>
            </div>:
            "Submit"
          }
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
