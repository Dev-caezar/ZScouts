// src/components/LoadingModal.js
import React from "react";
import "../styles/loadingModal.css";

const LoadingModal = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <p>Submitting your details, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
