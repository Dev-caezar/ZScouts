import React, { useState } from 'react'
import '../styles/playersettings.css'
import { TiPlus } from "react-icons/ti";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PaymentModal from '../pages/PaymentModal';

const PlayerSettings = () => {
  const [imageValue, setImageValue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const player = useSelector((state)=> state.player.playerKyc)
  const profile = useSelector((state)=> state.player.playerDetails)
  const dispatch = useDispatch()

  const BASE_URL = "https://zscouts.onrender.com";

  const validateImage = (image) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 2 * 1024 * 1024;
    if (!allowedTypes.includes(image.type)) {
      toast.error("Invalid file type. Please upload a JPEG or PNG image.");
      return false;
    }
    if (image.size > maxSize) {
      toast.error("File size exceeds 2MB. Please upload a smaller image.");
      return false;
    }
    return true;
  };

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!validateImage(file)) return;

    setImageValue(file);
  };

  const handleImageUpload = async () => {
    if (!imageValue) {
      toast.error("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("profilepic", imageValue);
    formData.append("id", player);

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/profilepic/${player.id}`, formData);
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/api/v1/player/${player.id}`, {
        fullname: fullName,
        email: email
      });
      toast.success("Details updated successfully!");
    } catch (error) {
      toast.error("Failed to update details.");
    }
  };

  return (
    <div className='player-settings-main'>
      <div className='player-settings-main-wrap'>
        <div className='player-settings-main-wrap-header'>
          <h1>Account settings</h1>
        </div>

        <div className='setting-profile-picture-div'>
          <div className='player-settings-main-inner'>
            <div className='player-settings-main-inner-1'>
              <img 
                src={imageValue ? URL.createObjectURL(imageValue) : (profile?.profilePic || "https://via.placeholder.com/150")} 
                alt="profile preview" 
              />
              <div className='player-setting-upload-icon'>
                <input type="file" id='upload-img' hidden onChange={getImageUrl} />
                <label htmlFor="upload-img"><TiPlus style={{ cursor: "pointer" }} /></label>
              </div>
            </div>

            <div className='player-settings-main-inner-2'>
              <p style={{ fontWeight: "600", color: "#333333" }}>{profile?.fullname || "Player Name"}</p>
              <p style={{ fontSize: "11px", fontWeight: "600", color: "gray" }}>{profile?.email || "player@email.com"}</p>
              {imageValue && (
                <button onClick={handleImageUpload} className="upload-image-btn">Upload</button>
              )}
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
                      <input 
                        type="text" 
                        placeholder='Enter your fullname...' 
                        className='my-personal-input' 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='personal-details-form-email'>
                    <div className='personal-details-form-name'>Email</div>
                    <div className='personal-details-form-input'>
                      <input 
                        type="email" 
                        placeholder='Enter your email...' 
                        className='my-personal-input' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='personal-details-form-button-div'>
                    <button type="button" className='personal-detail-save-changes-btn' onClick={handleSaveChanges}>
                      Save change
                    </button>
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
                  {["Old password", "New password", "Confirm password"].map((label, idx) => (
                    <div className='change-password-old-password' key={idx}>
                      <div className='change-password-old-password-top'>{label}</div>
                      <div className='change-password-old-password-bottom'>
                        <div className='change-password-old-password-bottom-1'>
                          <input 
                            type={showPassword ? "text" : "password"} 
                            className='my-change-password-input' 
                            placeholder='Enter password' 
                          />
                        </div>
                        <div className='change-password-old-password-bottom-2'>
                          {showPassword ? (
                            <FaRegEyeSlash onClick={() => setShowPassword(false)} style={{ cursor: "pointer" }} />
                          ) : (
                            <FaRegEye onClick={() => setShowPassword(true)} style={{ cursor: "pointer" }} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className='change-pasword-btn'>
                    <button type="button" className='change-password-btn-main'>Change</button>
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
                <div className='youre-on-a-fee-plan-middle'>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</div>
                <div className='youre-on-a-fee-plan-bottom'>
                  <button className='upgrade-to-premium-btn' onClick={()=> setShowModal(true)}>Upgrade to premium</button>
                </div>
              </div>
              {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
            </div>

            <div className='subscription-div-plan-bottom3-footer'>
              <div className='all-right-reserved-and-privacy-and-terms'>
                <div className='all-right-reserved'>©2025 Zcout | All rights reserved</div>
                <div className='privacy-and-terms'>
                  <p>Privacy</p>
                  <p>Terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlayerSettings;
