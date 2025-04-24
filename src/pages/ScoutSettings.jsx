import React, { useState } from "react";
import axios from "axios";
import "../styles/scoutsettings.css";
import { IoCameraOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import PaymentModal from "../pages/PaymentModal";
import KoraPayment from "kora-checkout";
import { setSubscribed } from "../global/Fearures";

const ScoutSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const scout = useSelector((state) => state?.user.scoutKyc.scoutId);
  const scoutDetails = useSelector((state) => state?.user?.scoutDetails?.data);
  const subscribed = useSelector((state) => state?.user?.subscribed);

  const UpgradeToPremiumpayment = () => {
    const paymentOptions = {
      key: "pk_test_VZb26Tf4s9GGHJuD9iUWdgiqEoCfQjhoHXG1nv4f",
      reference: `ref-${Date.now()}`,
      amount: 15000,
      customer: {
          name: scoutDetails.fullname,
          email: scoutDetails.email,
      },
      onSuccess: () => {
          setSubscribed(true)
          console.log('Payment successful');
      },
      onFailed: (err) => {
          console.error(err.message);
      }
  };

  const payment = new KoraPayment();
  payment.initialize(paymentOptions);
  };



  const handleSavePersonalData = () => {
    const personalData = { fullName, email };
    console.log("Save Personal Data:", personalData);
  };

  const handleChangePassword = () => {
    const passwordData = { oldPassword, newPassword, confirmPassword };
    console.log("Change Password:", passwordData);
  };

  const BASE_URL = "https://zscouts.onrender.com";

  const handleUploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("profilepic", file);  

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/scoutprofile-pic/${scout}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded:", response.data);
      setUploadedImageUrl(response.data.imageUrl);
      alert("Profile image updated successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <div className="scout_profilesetting">
      <h2 className="account_settings_header">Account setting</h2>

      <div className="scout_settinginfo">
        <div className="scout_settingprofile">
          <div className="scoutprofilepicture">
            {uploadedImageUrl ? (
              <img
                src={uploadedImageUrl}
                alt="Profile"
                className="profile-img-preview"
              />
            ) : null}

            <div className="plus-icon">
              <IoCameraOutline size={30} />
              <input
                type="file"
                accept="image/*"
                className="profile-upload-input"
                onChange={(e) => {
                  setProfileImage(e.target.files[0]);
                  handleUploadProfileImage(e.target.files[0]);
                }}
              />
            </div>
          </div>

          <div className="scoutprofiletext">
            <h4 className="scoutprofile_name">{scoutDetails.fullname}</h4>
            <p className="scoutprofile_email">{scoutDetails.email}</p>
          </div>
        </div>
      </div>

      <div className="settings-wrapper">
        <div className="settings-section">
          <h4 className="section-title">Personal Data</h4>
          <div className="settings-box">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="save-button" onClick={handleSavePersonalData}>
              Save change
            </button>
          </div>
        </div>
        <div className="settings-section">
          <h4 className="section-title">Change password</h4>
          <div className="settings-box">
            <label>Old password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label>New password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label>Confirm password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="save-button" onClick={handleChangePassword}>
              Change
            </button>
          </div>
        </div>
      </div>

      {
          !subscribed ? 
          <div className="div"></div>:
          <div className='subscription-div-plan'>
          <div className='subscription-div-plan-wrap'>
            <div className='subscription-div-plan-top'>Subscription</div>
            <div className='subscription-div-plan-middle'>
              <div className='subscription-div-plan-middle-wrap'>
                <div className='youre-on-a-fee-plan-top'>You're on the Free Plan</div>
                <div className='youre-on-a-fee-plan-middle'>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</div>
                <div className='youre-on-a-fee-plan-bottom'>
                <button className='upgrade-to-premium-btn' onClick={UpgradeToPremiumpayment} disabled={paymentLoading}>
                  {paymentLoading ? "Processing..." : "Upgrade to Premium"}
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }      
    </div>
  );
};

export default ScoutSettings;
