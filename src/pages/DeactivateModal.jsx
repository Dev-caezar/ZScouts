import React from 'react'
import '../styles/deactivatemodal.css';

const DeactivateModal = ({onClose, onConfirm}) => {

  return (
    <div className="modal-overlay">
    <div className="modal-box">
      <h2 className="modal-title">Deactivate account</h2>
      <p className="modal-text">
        Your display name, username, and public profile will no longer <br /> be viewable on Zscout. To activate, enter your sign in <br />information.
      </p>
      <div className="modal-buttons">
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <button className="yes-btn" onClick={onConfirm}>Yes</button>
      </div>
    </div>
  </div>

  )
}

export default DeactivateModal
