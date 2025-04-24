import React, { useEffect, useState } from 'react';
import "../../styles/playerDetails.css";
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setSubscribed } from '../../global/Fearures';
import KoraPayment from 'kora-checkout';
const PlayerDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const BASE_URL = "https://zscouts.onrender.com";

  const subscribed = useSelector((state) => state.user.subscribed);
  const user = useSelector((state) => state.user.scoutDetails);

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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/player-vids/${id}`);
        setVideos(response.data.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        toast.error("Error fetching videos.");
      }
    };

    if (id) {
      fetchVideos();
    }
  }, [id]);

  const UpgradeToPremiumpayment = () => {
    const paymentOptions = {
      key: "pk_test_VZb26Tf4s9GGHJuD9iUWdgiqEoCfQjhoHXG1nv4f",
      reference: `ref-${Date.now()}`,
      amount: 15000,
      customer: {
        name: player.fullname,
        email: player.email
      },
      onSuccess: () => {
        dispatch(setSubscribed(true));
        console.log('Payment successful');
      },
      onFailed: (err) => {
        console.error(err.message);
      }
    };

    const payment = new KoraPayment();
    payment.initialize(paymentOptions);
  };

  const firstInitial = player?.fullname ? player.fullname.charAt(0).toUpperCase() : '';
  const loadingIcon = <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />;

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
    navigate('/get_one_player_video', { state: { videoUrl, player } });
  };

  const handleProfileAccess = () => {
    if (subscribed) {
      navigate("/one_player_profile", { state: { player } });

    } else {
      setIsModalOpen(true);
    }
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
            <h4 onClick={handleProfileAccess}>View profile details</h4>
          </div>
          <div className="detail_video_container">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <div className="details_video_card" key={index}>
                  <div className="video_player" onClick={() => handleGetPlayer(video.videoUpload)}>
                    <video
                      src={video.videoUpload}
                      controls
                      style={{ width: "100%", borderRadius: "10px" }}
                      onError={(e) => console.error("Error loading video:", e)}
                      onCanPlayThrough={(e) => console.log("Video is ready to play:", e)}
                    ></video>
                    <div className="video_info">
                      <p>
                        Uploaded on: {new Date(video.createdAt).toLocaleDateString('en-GB', {
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
              <p>No videos uploaded yet.</p>
            )}
          </div>
        </div>

        {!subscribed && (
          <div className="premium_container">
            <h4>You’re on the Free Plan</h4>
            <p>To access Player’s contact information, upgrade to premium</p>
            <button className='upgrade_cta' onClick={UpgradeToPremiumpayment}>Upgrade to premium</button>
          </div>
        )}
      </div>

      <Modal
        title="Upgrade Required"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        okText="Close"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>You need to upgrade to a premium plan to view full profile details.</p>
      </Modal>
    </div>
  );
};

export default PlayerDetails;
