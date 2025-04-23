import React, { useState, useEffect } from 'react';
import "../styles/playerProfile.css";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Box, Rating } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { setPlayerKyc } from '../global/Player';
import KoraPayment from 'kora-checkout';

const PlayerProfile = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const BASE_URL = "https://zscouts.onrender.com";
  const player = useSelector((state) => state.player.playerDetails);
  const profile = useSelector((state) => state.player.playerKyc);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!window.Korapay) {
  //     const script = document.createElement("script");
  //     script.src = "https://js.korapay.com/inline.js";
  //     script.async = true;
  //     script.onload = () => console.log("KoraPay script loaded");
  //     document.body.appendChild(script);
  //   }
  // }, []);
  

  // const UpgradeToPremiumpayment = () => {
  //   if (!window.Korapay || !window.Korapay.initialize) {
  //     console.error("KoraPay script not loaded");
  //     alert("Payment service not available. Please try again later.");
  //     return;
  //   }
  
  //   const reference = `tx_ref_${Date.now()}`;
  //   const playerName = player?.fullname || "Player Name";
  //   const playerEmail = player?.email || "noemail@example.com";
  
  //   window.Korapay.initialize({
  //     key: "sk_test_XhjF4TzPkxZtnziGjgNDQeay3kmov2Z2RZ95hX6u",
  //     amount: 5000,
  //     currency: "NGN",
  //     reference,
  //     customer: {
  //       name: playerName,
  //       email: playerEmail,
  //     },
  //     callback: function (response) {
  //       console.log("Payment response: ", response);
  
  //       if (response.status === "success") {
  //         alert("Payment successful!");
  //         // 🔁 Optional: Call your backend to upgrade the player
  //       } else {
  //         alert("Payment was not successful.");
  //       }
  //     },
  //     onClose: function () {
  //       console.log("Payment modal closed");
  //     },
  //   });
  // };

  const UpgradeToPremiumpayment = () => {
    const paymentOptions = {
      key: "pk_test_VZb26Tf4s9GGHJuD9iUWdgiqEoCfQjhoHXG1nv4f",
      reference: `ref-${Date.now()}`,
      amount: 5000, // Example amount
      customer: {
          name: "Jane Doe",
          email: "jane@example.com"
      },
      onSuccess: () => {
          console.log('Payment successful');
      },
      onFailed: (err) => {
          console.error(err.message);
      }
  };

  const payment = new KoraPayment();
  payment.initialize(paymentOptions);
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/getplayer/${player.id}`);
        dispatch(setPlayerKyc(response.data.data.playerKyc));
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

  const firstInitial = player.fullname ? player?.fullname.charAt(0).toUpperCase() : '';
  const loadingIcon = <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />;

  if (loading) {
    return (
      <div className="loader">
        <Flex>
          <Spin indicator={loadingIcon} />
        </Flex>
      </div>
    );
  }

  const playerKyc = user?.playerKyc;

  return (
    <div className='playerProfile_body'>
      <div className="profile_wrapper">
        {authenticated?.data?.profileCompletion ? <div className="completed_profile"></div> : <Profiletracker />}
        <div className="profile_wrapper_card">
          <div className="user_card">
            <div className="user_image">
              {!profile?.profilePic ? (
                <h4 className="player_profile_initial">{firstInitial}</h4>
              ) : (
                <img src={profile?.profilePic} alt="Profile" />
              )}
            </div>

            <div className="user_details">
              <h4>{player?.fullname || "N/A"}</h4>
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
              <div className="info"><h4>Email Address</h4><p>{player?.email || "-"}</p></div>
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

          {authenticated ? (
            <div className="player_contact_details">
              <div className="plan_top">
                <h4>You’re on the Free Plan</h4>
                <p>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</p>
              </div>
              <div className="plan_bottom">
                <button className='premium_cta' onClick={UpgradeToPremiumpayment} disabled={paymentLoading}>
                  {paymentLoading ? "Processing..." : "Upgrade to Premium"}
                </button>
                {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
              </div>
            </div>
          ) : null}

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
