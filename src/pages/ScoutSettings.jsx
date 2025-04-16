import React, { useState } from "react";
import "../styles/scoutsettings.css";
import PaymentModal from "./PaymentModal";
import DeactivateModal from "./DeactivateModal";

const ScoutSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDeactivate = () => {
    setShowDeactivateModal(true);
  };

  const confirmDeactivate = () => {
    setShowDeactivateModal(false);
    alert("Your account has been deactivated");
  };

  const handleSavePersonalData = () => {
    const personalData = { fullName, email };
    console.log("Save Personal Data:", personalData);
   
  };

  const handleChangePassword = () => {
    const passwordData = { oldPassword, newPassword, confirmPassword };
    console.log("Change Password:", passwordData);
   
  };

  return (
    <div className="scout_profilesetting">
      <h2 className="account_settings_header">Account setting</h2>

      <div className="scout_settinginfo">
        <div className="scout_settingprofile">
          <div className="scoutprofilepicture">
            <div className="plus-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>

          <div className="scoutprofiletext">
            <h4 className="scoutprofile_name">Ozofor Chioma</h4>
            <p className="scoutprofile_email">cynthiaozofor@gmail.com</p>
            <p
              className="scoutdeactivate"
              onClick={handleDeactivate}
              style={{ color: "red", cursor: "pointer" }}
            >
              Deactivate account
            </p>
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
              placeholder="Michael Onyekachi"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="michaelonyekachi16@gmail.com"
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
      <div className="subscription-section">
        <h3 className="subscription-title">Subscription</h3>
        <div className="subscription-box">
          <h4 className="plan-title">You’re on the Free Plan</h4>
          <p className="plan-description">
            Unlock premium features and maximize your visibility to scouts.
            Upgrade now to optimize your account!
          </p>
          <button
            className="upgrade-btn"
            onClick={() => setShowModal(true)}
          >
            Upgrade to premium
          </button>
        </div>
      </div>

    
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
      {showDeactivateModal && (
        <DeactivateModal
          onClose={() => setShowDeactivateModal(false)}
          onConfirm={confirmDeactivate}
        />
      )}
    </div>
  );
};

export default ScoutSettings;
