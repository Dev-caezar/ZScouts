import React, { useEffect, useState } from 'react';
import "../styles/playervideo.css";
import { FaVideo } from "react-icons/fa";
import { IoIosStar } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Popup from '../components/Popup';
import DeleteVideoPopup from '../components/DeleteVideoPopUp';
import { toast } from 'react-toastify';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useSelector } from 'react-redux';

const PlayerVideo = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [video, setVideo] = useState();
  const [isPosting, setIsPosting] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isDeletePopUp, setIsDeletePopup] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const BASE_URL = "https://zscouts.onrender.com";
  const playerId = useSelector((state) => state.player.playerKyc);

  const handleCloseAllPopups = () => {
    setIsPreviewVisible(false);
    setIsPopUpOpen(false);
  };

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split('/')[0];
    if (fileType === 'video') {
      setIsVideo(true);
      setVideo(URL.createObjectURL(file));
      setIsPreviewVisible(true);
    } else {
      toast.warning('Only video files are allowed!');
      e.target.value = '';
    }
  };

  const handlePost = async () => {
    if (!video) return;

    setIsPosting(true);

    try {
      const fileInput = document.getElementById('fileUpload');
      const file = fileInput.files[0];

      const formData = new FormData();
      formData.append('playerId', playerId.id);
      formData.append('video', file);

      await axios.post(`${BASE_URL}/api/v1/videoupload/${playerId.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Video uploaded successfully!');
      setIsPopUpOpen(false);
      setIsPreviewVisible(false);
      setVideo("");
      fetchVideos();

    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error('Failed to upload video.');
    } finally {
      setIsPosting(false);
    }
  };

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/players/player-vids/${playerId.playerId}`);
      setVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (playerId) {
      fetchVideos();
    }
  }, [playerId]);

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

  return (
    <div className="player-video-main">
      <div className="player-video-main-wrap">
        {/* Upload Video Popup */}
        <Popup isopen={isPopUpOpen} onclose={() => setIsPopUpOpen(false)}>
          <div className="pop-up-inner-content">
            <div className="popup-header">
              <div className="create-post-div"><h1>Editor</h1></div>
              <div className="cancel-btn-div">
                <button onClick={() => setIsPopUpOpen(false)} className="pop-up-cancel-btn">X</button>
              </div>
            </div>
            <div className="popup-bottom">
              <div className="pop-up-bottom-inner">
                <div className="pop-up-bottom-inner-icon-div"><FaVideo /></div>
                <div className="select-files-to-begin"><h1>Select files to begin</h1></div>
                <div className="share-single-video"><p>Share a single video in your upload.</p></div>
                <div className="upload-from-computer-btn">
                  <input type="file" id="fileUpload" hidden onChange={getImageUrl} />
                  <label className="my-label-input" htmlFor="fileUpload">Upload from computer</label>
                </div>
              </div>
            </div>
          </div>
        </Popup>

        {/* Preview before posting */}
        {isPreviewVisible && (
          <div className="mini-preview-popup-overlay">
            <div className='mini-preview-inner-content'>
              <div className='mini-preview-inner-content-header'>
                <button onClick={handleCloseAllPopups} className='mini-preview-inner-content-cancel-btn'>X</button>
              </div>
              <div className='mini-preview-inner-content-bottom'>
                <div className='my-image-value-div'>
                  {video && isVideo ? (
                    <video controls width="100%">
                      <source src={video} type='video/mp4' />
                    </video>
                  ) : (
                    <img src={video} alt="preview" />
                  )}
                </div>
                <div className='text-area-div'>
                  <div className='text-area-div-1'>
                    <textarea className='my-text-area-main-main' placeholder='Add description...'></textarea>
                  </div>
                  <div className='text-area-div-2'>
                    <button
                      onClick={handlePost}
                      disabled={!video}
                      style={{
                        backgroundColor: !video ? "#ccc" : "#0c8f00",
                        cursor: !video ? "not-allowed" : "pointer",
                        opacity: isPosting ? 0.6 : 1
                      }}
                      className='post-video-div'
                    >
                      {isPosting ? (<div className="spinner"></div>) : "Post"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video List */}
        <div className="player-video-main-header">
          <div className="my-video-text"><h1>My Videos</h1></div>
          <div className="my-video-upload-btn">
            <button onClick={() => setIsPopUpOpen(true)} className="upload-new-video-btn">Upload New Video</button>
          </div>
        </div>

        <div className="all-my-mapped-videos">
          {videos.length > 0 ? (
            videos.map((vid, index) => (
              <div key={index} className="One-posted-video">
                <div className="video-div-top">
                  <video controls width="100%">
                    <source src={vid.media} type="video/mp4" />
                  </video>
                </div>
                <div className="video-text-div-buttom">
                  <div className="video-text-div-buttom-wrap">
                    <div className="match-highlight-text"><h1>Match Highlight</h1></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 style={{ color: "red" }}>No videos posted yet</h5>
          )}
        </div>

        <div className="down-div-footer"></div>
      </div>
    </div>
  );
};

export default PlayerVideo;
