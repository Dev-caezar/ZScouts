import React, { useEffect, useState } from 'react';
import "../../styles/playerDetails.css";
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const PlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const BASE_URL = "https://zscouts.onrender.com";

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/getplayer/${id}`);
        setPlayer(response.data.data);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayer();
  }, [id]);

  const firstInitial = player?.fullname ? player.fullname.charAt(0).toUpperCase() : '';
  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />
  );

  if (!player) {
    return (
      <div className="loader">
        <Flex>
          <Spin indicator={loadingIcon} />
        </Flex>
      </div>
    );
  }

  const handleGetPlayer = (videoUrl) => {
    navigate(`/get_one_player_video/${id}`, { state: { videoUrl } });
  };

  return (
    <div className='player_details_body'>
      <div className="detais_body_wrapper">
        <div className="back_card">
          <IoReturnUpBackOutline className='back_icon' onClick={handleBack} />
        </div>

        <div className="profile_data">
          <div className="details_image">
            {player?.playerKyc?.profilePic ? (
              <img
                src={player.playerKyc.profilePic}
                alt={player.fullname}
                className="player-img"
              />
            ) : (
              <span className="details_profile_initial">{firstInitial}</span>
            )}
          </div>

          <div className="details_user">
            <h4>{player.fullname}</h4>
            <p>{player.playerKyc?.secondaryPosition || "N/A"}</p>
            <p>{player.playerKyc?.age ? `${player.playerKyc.age} years` : "Age N/A"}</p>
          </div>
        </div>

        <div className="details_video">
          <div className="video_header">
            <h4>Videos</h4>
            <h4>View profile details</h4>
          </div>
          <div className="detail_video_container">
            {player?.playerKyc?.media ? (
              Array.isArray(player.playerKyc.media) && player.playerKyc.media.length > 0 ? (
                player.playerKyc.media.map((videoUrl, index) => (
                  <div className="details_video_card" key={index}>
                    <div className="video_player" onClick={() => handleGetPlayer(videoUrl)}>
                      <video
                        src={videoUrl}
                        controls
                        style={{ width: "100%", borderRadius: "10px" }}
                      ></video>
                      <div className="video_info">
                        <p>
                          Uploaded on: {new Date(player.playerKyc.createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="details_video_card">
                  <div className="video_player" onClick={() => handleGetPlayer(player.playerKyc.videoUpload)}>
                    <video
                      src={player.playerKyc.videoUpload}
                      controls
                      style={{ width: "100%", borderRadius: "10px" }}
                    ></video>
                    <div className="video_info">
                      <p>
                        Uploaded on: {new Date(player.playerKyc.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <p>No videos uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
