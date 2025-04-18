import React from "react";
import "../styles/paymemtPopupPlayer.css"; // Create this for styles

const PaymentPopupModal = ({isOpen, onClose }) => {
    if(!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
            <img src="public/material-symbols_close.svg" alt="close"/>
        </button>
        <h2 className="modal-title1">Payment Overview</h2>

        <div className="modal-section">
          <p><strong>Plan</strong></p>
          <ul>
          <li>
          Premium Plan
          </li>
          </ul>
        </div>

        <div className="modal-section">
          <p><strong>Features of Premium Plan</strong></p>
          <ul>
            <li>Get priority visibility for scouts</li>
          </ul>
        </div>

        <div className="modal-section">
          <p><strong>Payment Options</strong></p>
          <ul>
            <li>Monthly</li>
          </ul>
        </div>

        <div className="modal-section">
          <p><strong>Payment Gateway</strong></p>
          <img src="public/korapay-icon-512x142-nn4g9i7b 1.png" alt="Korapay" style={{ width: "100px" }} />
        </div>

        <button className="modal-upgrade-btn">Upgrade Now</button>
      </div>
    </div>
  );
};

export default PaymentPopupModal;
