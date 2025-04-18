import React, { useState, useEffect } from 'react';
import "../styles/playerProfile.css";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Box, Rating } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const PlayerProfile = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const BASE_URL = "https://zscouts.onrender.com";
    const player= useSelector((state)=> state.player.playerDetails.id)
    console.log("this is my id", player)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/getplayer/${player}`);
        console.log(response.data)
        setUser(response.data.data);
        setAuthenticated(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);


  console.log(authenticated?.data?.profileCompletion)
   const loadingIcon = <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />

  if (loading) {
    return (
      <div className="loader">
         <Flex>
      <Spin indicator={loadingIcon} />
    </Flex>
      </div>
    )
  }

  const playerKyc = user?.playerKyc;
  console.log(playerKyc)

  return (
    <div className='playerProfile_body'>
      <div className="profile_wrapper">
        {authenticated?.data?.profileCompletion ? <div className="completed_profile"></div> : <Profiletracker />}
        <div className="profile_wrapper_card">
          <div className="user_card">
            <div className="user_image">
              {user?.profilePicture
                ? <img src={playerKyc.profilePicture} alt="Profile" />
                : <div className="placeholder_image"></div>}
            </div>

            <div className="user_details">
              <h4>{user?.fullname || "N/A"}</h4>
              <h5>{playerKyc?.primaryPosition || "Position N/A"}</h5>
              <p>{playerKyc?.age ? `${playerKyc.age} years` : "-"}</p>
              <Box>
                <Rating name="legend" value={playerKyc?.rating || 0} disabled />
              </Box>
            </div>
          </div>

          <div className="player_personal_details">
            <div className="details_top">
              <h4>Personal Information</h4>
            </div>
            <div className="details_bottom">
              <div className="info"><h4>Full Name</h4><p>{user?.fullname || "-"}</p></div>
              <div className="info"><h4>Age</h4><p>{playerKyc?.age || "-"}</p></div>
              <div className="info"><h4>Nationality</h4><p>{playerKyc?.nationality || "-"}</p></div>
              <div className="info"><h4>Height (CM)</h4><p>{playerKyc?.height || "-"}</p></div>
              <div className="info"><h4>Weight (KG)</h4><p>{playerKyc?.weight || "-"}</p></div>
              <div className="info"><h4>Preferred Foot</h4><p>{playerKyc?.preferredFoot || "-"}</p></div>
            </div>
          </div>

          <div className="player_contact_details">
            <div className="details_top">
              <h4>Contact Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Email Address</h4><p>{playerKyc?.email || "-"}</p></div>
              <div className="info"><h4>Phone Number</h4><p>{playerKyc?.phoneNumber || "-"}</p></div>
              <div className="info"><h4>Home Address</h4><p>{playerKyc?.homeAddress || "-"}</p></div>
            </div>
          </div>

          <div className="player_contact_details">
            <div className="details_top"><h4>Football Profile</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Primary Position</h4><p>{playerKyc?.primaryPosition || "-"}</p></div>
              <div className="info"><h4>Secondary Position</h4><p>{playerKyc?.secondaryPosition || "-"}</p></div>
              <div className="info"><h4>Current Club/Academy</h4><p>{playerKyc?.currentClub || "-"}</p></div>
              <div className="info"><h4>Strengths</h4><p>{playerKyc?.strengths || "-"}</p></div>
            </div>
          </div>

          <div className="player_contact_details">
            <div className="details_top"><h4>Medical & Fitness Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Do you follow a diet plan?</h4><p>{playerKyc?.followDiet || "-"}</p></div>
            </div>
          </div>

          <div className="player_contact_details">
            <div className="details_top"><h4>Coach Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Contact Info*</h4><p>{playerKyc?.contactInfoOfCoaches || "-"}</p></div>
            </div>
          </div>

          <div className="player_contact_details">
            <div className="details_top"><h4>Other Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Open to Trials</h4><p>{playerKyc?.openToTrials || "-"}</p></div>
              <div className="info"><h4>Willing to Relocate</h4><p>{playerKyc?.willingToRelocate || "-"}</p></div>
            </div>
          </div>

          {authenticated? 
          <div className="player_contact_details">
          <div className="plan_top">
            <h4>You’re on the Free Plan</h4>
            <p>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</p>
          </div>
          <div className="plan_bottom">
            <button className='premium_cta'>Upgrade to Premium</button>
          </div>
        </div>:
          null }

          <div className="player_video_profile">
            <div className="video_bottom">
              <div className="video_bottom_text">
                <h4>Videos</h4>
              </div>
              <div className="bottom_video_card">
                {playerKyc?.media
                  ? <video src={playerKyc.media} controls width="100%" />
                  : <p>No videos uploaded</p>}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default PlayerProfile;
