import React, { useEffect, useState } from 'react';
import "../styles/getoneplayervideo.css";
import { IoIosStar } from 'react-icons/io';
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const GetOnePlayerVideo = () => {
  const nav = useNavigate(); 
  const { state } = useLocation();
  const { videoUrl, player } = state;
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0); 
  const token = useSelector((state) => state.user.scoutToken.token);
  const BASE_URL = "https://zscouts.onrender.com";

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/players/allplayers`);
        setPlayers(response.data.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
      setLoading(false);
    };

    fetchPlayers();
  }, []);

  const handleRatingChange = async (event, newValue) => {
    setValue(newValue);  
    try {
      await axios.post(
        `${BASE_URL}/api/players/${player.id}/rate`,
        {
          playerId: player.id,
          videoUrl: videoUrl,
          rating: newValue
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log("Rating submitted successfully");
      toast.success("Rating submitted successfully");
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("You have already rated this player");
    }
  };

  const handleGetOne = (player) => {
    nav(`/player_details/${player.id}`); 
  };

  console.log(player);

  return (
    <div className='get-one-player-video-main'>
      <div className='get-one-player-video-main-wrap'>
        <div className='get-one-div-top'>
          <div className='get-one-div-top-top'>
            <button onClick={() => nav(-1)} className='my-go-back-button'>
              <TbArrowBackUp />
            </button>
          </div>
          <div className='get-one-video-div'>
            <video controls width="100%">
              <source src={videoUrl} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className='get-one-profile'>
          <div className='get-one-div-top-text'>Match Highlights</div>
          <div className='get-one-profile-main'>
            <div className='get-one-profile-main-iner-1'>
              <div className='get-one-profile-main-iner-1-circle'>
                <img src={player?.playerKyc?.profilePic} alt="img" />
              </div>
              <div className='get-one-profile-main-iner-1-profile-text'>
                <div className='get-one-player-name'>{player?.fullname}</div>
                <div className='get-one-player-position'>{player?.playerKyc?.primaryPosition}</div>
                <div className='get-one-player-years'>{player?.playerKyc?.age} years</div>
              </div>
            </div>
            <div className='get-one-profile-main-iner-2'>
              <div className='rating-inner-div'>
                <div className='rating-inner-div-1'>Rate this video</div>
                <div className='rating-inner-div-2'>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={handleRatingChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='get-one-recommendations'>
          <div className='get-one-recommendation-top'>Recommendations</div>
          <div className='get-one-recommendation-video'>
            {loading ? (
              <p>Loading recommendations...</p>
            ) : (
              players.map((player, index) => (
                <div key={index} className='one-player-profile-recommendation' onClick={() => handleGetOne(player)}>
                  <div className='one-player-profile-recommendation-div-1'>
                    <div className='one-player-profile-recommendation-div-1-image'>
                      {player?.playerKyc?.profilePic ? (
                        <img
                          src={player.playerKyc.profilePic}
                          alt={player.fullname}
                          className="player-img"
                        />
                      ) : (
                        <div className="player-img-card">
                          {player.fullname?.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="details_text">
                      <h4>{player.fullname}</h4>
                      <p>{player.playerKyc?.primaryPosition}</p>
                      <p>{player.playerKyc?.age ? `${player.playerKyc.age} Years` : '-'}</p>
                    </div>
                  </div>
                  <div className='one-player-profile-recommendation-div-2'>
                    <Rating
                      name="simple-uncontrolled"
                      onChange={(event, newValue) => {
                        console.log(newValue);
                      }}
                      defaultValue={2}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOnePlayerVideo;
