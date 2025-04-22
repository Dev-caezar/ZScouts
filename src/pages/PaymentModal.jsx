import React, { useState } from "react";
import axios from "axios";  
import "../styles/paymentmodal.css"; 
import { useSelector } from "react-redux";

const PaymentModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const token = useSelector((state)=> state.user.scoutToken.token) 
  console.log(token)

  const BASE_URL = "https://zscouts.onrender.com";


  const handlePayment = async () => {
    if (!token) {
      setError("Authorization required. Please log in first.");
      return;
    }

    setLoading(true);
    setError(null); 

    try {
      const response = await axios.post(
       `${BASE_URL}/api/transactions/initialize`,{},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.data.success) {
        const paymentUrl = response.data.checkout_url;

        window.location.href = paymentUrl; 
      } else {
        setError("Payment initiation failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during payment API call", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src="/material-symbols_close.svg" alt="close" />
        </button>
        <h2 className="modal-title1">Payment Overview</h2>

        <div className="modal-section">
          <p><strong>Plan</strong></p>
          <ul>
            <li>Premium Plan</li>
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
          <img
            src="/korapay-icon-512x142-nn4g9i7b 1.png"
            alt="Korapay"
            style={{ width: "100px" }}
          />
        </div>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>} 

        <button
          className="modal-upgrade-btn"
          onClick={handlePayment}  
          disabled={loading}  
        >
          {loading ? "Processing..." : "Upgrade Now"} 
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
