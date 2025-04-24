import React, { useEffect, useState, useRef } from 'react';
import "../styles/playervideo.css";
import { FaVideo } from "react-icons/fa";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Popup from "../components/Popup";

const PlayerVideo = () => {
  const [Video, setVideo] = useState();
  const [description, setDescription] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoModal, setVideoModal] = useState(false);

  const fileInputRef = useRef(null);
  const BASE_URL = "https://zscouts.onrender.com";
  const playerId = useSelector((state) => state.player.playerKyc);

  const handleUploadClick = () => {
    setVideoModal(true);
    // fileInputRef.current.click();
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
    if (!Video) return;

    setIsPosting(true);
    try {
      const file = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append('playerId', playerId.id);
      formData.append('video', file);
      formData.append('description', description);

      await axios.post(`${BASE_URL}/api/v1/videoupload/${playerId.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Video uploaded successfully!');
      setIsPreviewVisible(false);
      setVideo("");
      setDescription("");
      fileInputRef.current.value = '';
      fetchVideos();
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error(error?.response?.status === 413
        ? "Upload failed: File size exceeds 25MB limit!"
        : "Failed to upload video.");
    } finally {
      setIsPosting(false);
    }
  };

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/players/player-vids/${playerId.playerId}`);
      setVideos(response.data.data || []);
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
    <div className='video_body'>
      <div className="video_wrapper">
        <div className="videobody_header">
          <h4>My Videos</h4>
          <button className='upload_cta' onClick={handleUploadClick}>
            Upload New Video
          </button>
          {
            videoModal ? 
            <Popup isopen={videoModal} onclose={() => setVideoModal(false)} /> :
            null
          }
        </div>
        {videos.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          <div className="myvideo_body">
            {videos.map((video, index) => (
              <div key={index} className="video_card">
                <div className="video_holder">
                  {video.videoUpload ? (
                    <video width="300" height="200" controls>
                      <source src={video.videoUpload} type="video/mp4" />
                      <source src={video.videoUpload} type="video/mkv" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>No video available</p>
                  )}
                </div>
                <div className="video_details">
                <h4>match Highlights- {new Date(video.createdAt).toLocaleString('en-US', {
                     year: 'numeric', month: 'long'
                    })}
                </h4>
                <p>Uploaded on -{new Date(video.createdAt).toLocaleString('en-US', {
                     year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerVideo;
