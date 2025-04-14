import React, { useState } from "react";
import "../styles/scoutprofile.css";

const ScoutProfile = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (star) => {
    if (rating === star) {
      setRating(0);
    } else {
      setRating(star);
    }
  };

  return (
    <div className="scoutbody">
      <div className="scoutprofileicon">
        <div className="scoutinfo">
          <div className="scoutprofilepicture">
            <div className="plus-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="plus-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M12 5v14m7-7H5"
                />
              </svg>
            </div>
          </div>

          <div className="scoutprofiledetails">
            <h4>Ozofor Chioma</h4>
            <p>
              <span className="role">Scout</span>{" "}
              <span className="status">Not verified</span>
            </p>
            <p className="scoutprofileyear">45 years</p>

            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star-wrapper ${
                    star <= (hover || rating) ? "filled" : ""
                  }`}
                  onClick={() => handleClick(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    src="/emojione_star.svg"
                    alt="star"
                    className="star-img"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='scoutinfobox'>
  <h5>Personal Information</h5>
  <div className='scoutinfoform'>
    <div className='scoutdetails'>
      <h6>Full Name</h6>
      <p className='scoutdetailtext'>Ozofor Chioma</p>
    </div>
    <div className='scoutdetails'>
      <h6>Age</h6>
      <p className='scoutdetailtext'>23</p>
    </div>
    <div className='scoutdetails'>
      <h6>Nationality</h6>
      <p className='scoutdetailtext'>Nigerian</p>
    </div>
    <div className='scoutdetails'>
      <h6>Gender</h6>
      <p className='scoutdetailtext'>Female</p>
    </div>
  </div>
</div>

<div className='scoutinfobox'>
  <h5>Contact Information</h5>
  <div className='scoutinfoform'>
    <div className='scoutdetails'>
      <h6>Email Address</h6>
      <p className='scoutdetailtext'>chiomaozofor@outlook.com</p>
    </div>
    <div className='scoutdetails'>
      <h6>Phone Number</h6>
      <p className='scoutdetailtext'>+234 802 499 5013</p>
    </div>
    <div className='scoutdetails'>
      <h6>Home Adress</h6>
      <p className='scoutdetailtext'>54, Muyibi street, Olodi-Apapa, Lagos.</p>
    </div>
      
  </div>
  
</div>
<div className='scoutinfobox'>
  <h5>Scouting Information</h5>
  <div className='scoutinfoform'>
    <div className='scoutdetails'>
      <h6>Organization / Club Name</h6>
      <p className='scoutdetailtext'>Sunshine FC</p>
    </div>
    <div className='scoutdetails'>
      <h6>Scouting Role</h6>
      <p className='scoutdetailtext'>Lead Scout</p>
    </div>
    <div className='scoutdetails'>
      <h6>Leagues / Region Covered</h6>
      <p className='scoutdetailtext'>NPFL, West Africa</p>
    </div>
    <div className='scoutdetails'>
      <h6>Preferred Player Position</h6>
      <p className='scoutdetailtext'>Striker, Left Winger</p>
    </div>
  </div>
</div>
<div className="scoutcredentialsbox">
  <h5>Professional Credentials</h5>
  <div className="credentialcard">
    <div className="credential-left">
      <div className="file-icon">
        <img src="/Group.svg" alt="Scout Certification Icon" />
      </div>
      <span className="credential-label">Scout Certification</span>
    </div>
    <button className="download-icon">
      <img src="/material-symbols_download.svg" alt="Download Icon" />
    </button>
  </div>
</div>


    </div>
  );
};

export default ScoutProfile;
