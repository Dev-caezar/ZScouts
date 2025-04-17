import React, { useState, useEffect } from 'react';
import "../styles/playerProfile.css";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Box, Rating } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PlayerProfile = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://zscouts.onrender.com";
  const { id } = useParams();
  const player = useSelector((state)=> state.player.player)
  console.log(player)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/getplayer/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div className='playerProfile_body'>Loading profile...</div>;
  }

  return (
    <div className='playerProfile_body'>
      <div className="profile_wrapper">
        {!authenticated ? <Profiletracker /> : <div className="completed_profile"></div>}

        <div className="profile_wrapper_card">
          <div className="user_card">
            <div className="user_image">
              {user?.profilePicture 
                ? <img src={user.profilePicture} alt="Profile" />
                : <div className="placeholder_image">No Image</div>}
            </div>
            <div className="user_details">
              <h4>{user?.fullname || "N/A"}</h4>
              <h5>{user?.primaryPosition || "Position N/A"}</h5>
              <p>{user?.age ? `${user.age} years` : "-"}</p>
              <Box>
                <Rating name="legend" value={user?.rating || 0} disabled />
              </Box>
            </div>
          </div>

          {/* Personal Details */}
          <div className="player_personal_details">
            <div className="details_top">
              <h4>Personal Information</h4>
            </div>
            <div className="details_bottom">
              <div className="info"><h4>Full Name</h4><p>{user?.fullname || "-"}</p></div>
              <div className="info"><h4>Age</h4><p>{user?.age || "-"}</p></div>
              <div className="info"><h4>Nationality</h4><p>{user?.nationality || "-"}</p></div>
              <div className="info"><h4>Gender</h4><p>{user?.gender || "-"}</p></div>
              <div className="info"><h4>Height (CM)</h4><p>{user?.height || "-"}</p></div>
              <div className="info"><h4>Weight (KG)</h4><p>{user?.weight || "-"}</p></div>
              <div className="info"><h4>Preferred Foot</h4><p>{user?.preferredFoot || "-"}</p></div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="player_contact_details">
            <div className="details_top">
              <h4>Contact Information</h4>
            </div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Email Address</h4><p>{user?.email || "-"}</p></div>
              <div className="info"><h4>Phone Number</h4><p>{user?.phoneNumber || "-"}</p></div>
              <div className="info"><h4>Home Address</h4><p>{user?.address || "-"}</p></div>
            </div>
          </div>

          {/* Football Profile */}
          <div className="player_contact_details">
            <div className="details_top"><h4>Football Profile</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Primary Position</h4><p>{user?.primaryPosition || "-"}</p></div>
              <div className="info"><h4>Secondary Position</h4><p>{user?.secondaryPosition || "-"}</p></div>
              <div className="info"><h4>Current Club/Academy</h4><p>{user?.currentClub || "-"}</p></div>
              <div className="info"><h4>Strengths</h4><p>{user?.strengths || "-"}</p></div>
            </div>
          </div>

          {/* Medical & Fitness */}
          <div className="player_contact_details">
            <div className="details_top"><h4>Medical & Fitness Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Do you follow a diet plan?</h4><p>{user?.dietPlan || "-"}</p></div>
            </div>
          </div>

          {/* Coach Information */}
          <div className="player_contact_details">
            <div className="details_top"><h4>Coach Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Contact Info*</h4><p>{user?.coachContact || "-"}</p></div>
            </div>
          </div>

          {/* Other Information */}
          <div className="player_contact_details">
            <div className="details_top"><h4>Other Information</h4></div>
            <div className="contact_details_bottom">
              <div className="info"><h4>Open to Trials</h4><p>{user?.openToTrials ? "Yes" : "No"}</p></div>
              <div className="info"><h4>Willing to Relocate</h4><p>{user?.willingToRelocate ? "Yes" : "No"}</p></div>
            </div>
          </div>

          {/* Premium Section */}
          {authenticated && (
            <div className="player_contact_details">
              <div className="plan_top">
                <h4>You’re on the Free Plan</h4>
                <p>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</p>
              </div>
              <div className="plan_bottom">
                <button className='premium_cta'>Upgrade to Premium</button>
              </div>
            </div>
          )}

          {/* Video Profile */}
          <div className="player_video_profile">
            {authenticated && (
              <div className="video_top">
                <h4>You’re on the Free Plan</h4>
              </div>
            )}
            <div className="video_bottom">
              <div className="video_bottom_text">
                <h4>Videos</h4>
              </div>
              <div className="bottom_video_card">
                {user?.videos?.length > 0
                  ? user.videos.map((video, index) => (
                    <video key={index} src={video} controls width="100%" />
                  ))
                  : <p>No videos uploaded</p>}
              </div>
            </div>
          </div>

          <button className='complete_cta'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
