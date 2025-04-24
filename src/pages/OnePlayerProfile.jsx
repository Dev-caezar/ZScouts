import React, { useEffect, useState } from 'react';
import "../styles/oneplayerprofile.css";
import { TbArrowBackUp } from 'react-icons/tb';
import { IoIosStar } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OnePlayerProfile = () => {
  const [player, setPlayer] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const BASE_URL = "https://zscouts.onrender.com";
  const playerId = location.state?.player?.id; 

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/getplayer/${playerId}`);
        setPlayer(response.data.data);
      } catch (error) {
        console.error("Error fetching player profile:", error);
      }
    };

    if (playerId) fetchPlayer();
  }, [playerId]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='OnePlayerProfile'>
      <div className='OnePlayerProfile-wrap'>
        <div className='OnePlayerProfile-top'>
          <div className='OnePlayerProfile-top-1'>
            <button className='OnePlayerProfile-top-button' onClick={handleBack}><TbArrowBackUp /></button>
          </div>
          <div className='OnePlayerProfile-top-2'>
            <div className='OnePlayerProfile-top-2-inner'>
              <div className='OnePlayerProfile-top-2-inner-1'>
                <img src={player?.playerKyc?.profilePic || "/src/assets/amadiimage.png"} alt="Player" />
              </div>
              <div className='OnePlayerProfile-top-2-inner-2'>
                <div className='OnePlayerProfile-top-2-inner-2-top'>{player?.fullname || "--"}</div>
                <div className='OnePlayerProfile-top-2-inner-2-position'>{player?.playerKyc?.primaryPosition || "--"}</div>
                <div className='OnePlayerProfile-top-2-inner-2-years'>{player?.playerKyc?.age || "--"} Years</div>
                <div className='OnePlayerProfile-top-2-inner-2-rating'>
                  {[...Array(5)].map((_, i) => <IoIosStar key={i} style={{ cursor: "pointer" }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player_personal_details">
          <div className="details_top"><h4>Personal Information</h4></div>
          <div className="details_bottom">
            <div className="info"><h4>Full Name</h4><p>{player?.fullname || "--"}</p></div>
            <div className="info"><h4>Age</h4><p>{player?.playerKyc?.age || "--"}</p></div>
            <div className="info"><h4>Nationality</h4><p>{player?.playerKyc?.nationality || "--"}</p></div>
            <div className="info"><h4>Height (CM)</h4><p>{player?.playerKyc?.height || "--"}</p></div>
            <div className="info"><h4>Weight (KG)</h4><p>{player?.playerKyc?.weight || "--"}</p></div>
            <div className="info"><h4>Preferred Foot</h4><p>{player?.playerKyc?.preferredFoot || "--"}</p></div>
          </div>
        </div>

        <div className="player_contact_details">
          <div className="details_top"><h4>Football Profile</h4></div>
          <div className="contact_details_bottom">
            <div className="info"><h4>Primary Position</h4><p>{player?.playerKyc?.primaryPosition || "--"}</p></div>
            <div className="info"><h4>Secondary Position</h4><p>{player?.playerKyc?.secondaryPosition || "--"}</p></div>
            <div className="info"><h4>Current Club/Academy</h4><p>{player?.playerKyc?.currentClub || "--"}</p></div>
            <div className="info"><h4>Strengths</h4><p>{player?.playerKyc?.strengths || "--"}</p></div>
          </div>
        </div>

        <div className="player_contact_details">
          <div className="details_top"><h4>Club & Coach History</h4></div>
          <div className="contact_details_bottom">
            <div className="info"><h4>Coach Name</h4><p>{player?.playerKyc?.coachName || "--"}</p></div>
            <div className="info"><h4>Coach phone Number</h4><p>{player?.playerKyc?.coachPhone || "--"}</p></div>
            <div className="info"><h4>Coach contact Email</h4><p>{player?.playerKyc?.coachEmail || "--"}</p></div>
          </div>
        </div>

        <div className="player_contact_details">
          <div className="details_top"><h4>Medical & Fitness Information</h4></div>
          <div className="contact_details_bottom">
            <div className="info"><h4>Do you follow a diet plan?</h4><p>{player?.playerKyc?.dietPlan || "--"}</p></div>
          </div>
        </div>

        <div className="player_contact_details">
          <div className="details_top"><h4>Other Information</h4></div>
          <div className="contact_details_bottom">
            <div className="info"><h4>Are you Open to Trials?</h4><p>{player?.playerKyc?.openToTrials ? "Yes" : "No"}</p></div>
            <div className="info"><h4>Willing to Relocate?</h4><p>{player?.playerKyc?.relocate ? "Yes" : "No"}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePlayerProfile;
