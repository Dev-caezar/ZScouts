import React, { useEffect, useState } from 'react';
import "../styles/getoneplayervideo.css";
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
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const token = useSelector((state) => state.user.scoutToken.token);
  const user = useSelector((state) => state.user.scoutDetails.data);
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

  const handleRatingChange = (event, newValue) => {
    setRate(newValue);
  };

  const handleSubmitRating = async () => {
    if (!rate || !comment.trim()) {
      return toast.warn("Please provide both a rating and a comment.");
    }

    try {
      await axios.post(
        `${BASE_URL}/api/players/${player.id}/rate`,
        {
          playerId: player.id,
          videoUrl: videoUrl,
          ratingScore: rate,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      toast.success("Rating and comment submitted!");
      setComment("");
      setRate(0);
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("You have already rated this player.");
    }
  };

  const handleGetOne = (player) => {
    nav(`/player_details/${player.id}`); 
  };

  const firstInitial = user.fullname ? user.fullname.charAt(0).toUpperCase() : '';

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
                    value={rate}
                    onChange={handleRatingChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="comment_section">
          <div className="scout_pics">
            {user?.profilePics ? (
              <img src={user.profilePics} alt="Scout" />
            ) : (
              <span>{firstInitial}</span>
            )}
          </div>
          <div className='comment-box'>
            <input
              placeholder='Leave a comment about this video...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className='comment-textarea'
              rows={4}
            />
            <div 
              className={`post_cta ${(!rate || !comment.trim()) ? "disabled" : ""}`} 
              onClick={(!rate || !comment.trim()) ? null : handleSubmitRating}
            >
              <h4>Post</h4>
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
                      name="legend" 
                      value={player?.ratings?.[0]?.ratingScore || 0} 
                      disabled 
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
