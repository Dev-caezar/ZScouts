import React, { useEffect, useState } from 'react';
import "../styles/getoneplayervideo.css";
import { IoIosStar } from 'react-icons/io';
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';

const GetOnePlayerVideo = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
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
              <source src={state?.videoUrl} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className='get-one-profile'>
          <div className='get-one-div-top-text'>Match Highlights</div>
          <div className='get-one-profile-main'>
            <div className='get-one-profile-main-iner-1'>
              <div className='get-one-profile-main-iner-1-circle'>
                <img src="/src/assets/wisdomimage.png" alt="img" />
              </div>
              <div className='get-one-profile-main-iner-1-profile-text'>
                <div className='get-one-player-name'>Osuji Wisdom</div>
                <div className='get-one-player-position'>Striker</div>
                <div className='get-one-player-years'>18 years</div>
                <div className='get-one-player-rating-div'>
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} style={{ cursor: "pointer" }} />
                  ))}
                </div>
              </div>
            </div>
            <div className='get-one-profile-main-iner-2'>
              <div className='rating-inner-div'>
                <div className='rating-inner-div-1'>Rate this video</div>
                <div className='rating-inner-div-2'>
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} style={{ cursor: "pointer" }} />
                  ))}
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
                <div key={index} className='one-player-profile-recommendation'>
                  <div className='one-player-profile-recommendation-div-1'>
                    <div className='one-player-profile-recommendation-div-1-image'>
                            {player.profileImage ? (
                            <img
                            src={player.profileImage}
                            alt={player.fullname}
                            className="player-img"
                            />
                        ) : (
                            <div className="player-img-card">
                            {player.fullname?.charAt(0).toUpperCase()}
                            </div>
                        )}
                      {/* <img src={player.playerKyc?.profilePic || "/src/assets/wisdomimage.png"} alt="img" /> */}
                    </div>
                    <h4>{player.fullname}</h4>
                  </div>
                  <div className='one-player-profile-recommendation-div-2'>
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar key={i} style={{ cursor: "pointer" }} />
                    ))}
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
