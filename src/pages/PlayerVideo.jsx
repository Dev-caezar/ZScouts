import React, { useEffect, useState } from 'react';
import "../styles/playervideo.css";
import { IoIosStar } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Popup from '../components/Popup';
import DeleteVideoPopup from '../components/DeleteVideoPopUp';
import { toast } from 'react-toastify';
import { FaVideo } from "react-icons/fa";
import { useParams } from 'react-router';
import axios from 'axios';

const PlayerVideo = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [imageValue, setImageValue] = useState();
  const [post, setPost] = useState([]);
  const [isDeletePopUp, setIsDeletePopup] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  const BASE_URL = "https://zscouts.onrender.com";

  const handleCloseAllPopups = () => {
    setIsPreviewVisible(false);
    setIsPopUpOpen(false);
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/players/player-vids/${id}`);
      console.log("Fetched videos:", response.data.data);
      setVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [id]);

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split('/')[0];
    if (fileType === 'video') {
      setIsVideo(true);
      setSelectedFile(file);
      setImageValue(URL.createObjectURL(file));
      setIsPreviewVisible(true);
    } else {
      toast.warning('Only video files are allowed!');
      e.target.value = '';
    }
  };

  const uploadPlayerVideo = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("media", selectedFile);
    formData.append("description", "My highlight video");

    try {
      setIsPosting(true);
      const res = await axios.post(
        `${BASE_URL}/api/v1/videoupload/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload response:", res.data);
      toast.success("Video uploaded successfully!");
      fetchVideos();
      setIsPreviewVisible(false);
      setIsPopUpOpen(false);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed!");
      setIsPreviewVisible(false);
      setIsPopUpOpen(false);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="player-video-main">
      <div className="player-video-main-wrap">
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
                  <input type="file" id="l" hidden onChange={getImageUrl} />
                  <label className="my-label-input" htmlFor="l">Upload from computer</label>
                </div>
              </div>
            </div>
          </div>
        </Popup>

        {isPreviewVisible && (
          <div className="mini-preview-popup-overlay">
            <div className='mini-preview-inner-content'>
              <div className='mini-preview-inner-content-header'>
                <button onClick={handleCloseAllPopups} className='mini-preview-inner-content-cancel-btn'>X</button>
              </div>
              <div className='mini-preview-inner-content-bottom'>
                <div className='my-image-value-div'>
                  {imageValue && isVideo ? (
                    <video controls width="100%">
                      <source src={imageValue} type='video/mp4' />
                    </video>
                  ) : (
                    <img src={imageValue} alt="preview" />
                  )}
                </div>
                <div className='text-area-div'>
                  <div className='text-area-div-1'>
                    <textarea className='my-text-area-main-main' placeholder='Add description...'></textarea>
                  </div>
                  <div className='text-area-div-2'>
                    <button
                      onClick={uploadPlayerVideo}
                      disabled={!imageValue}
                      style={{
                        backgroundColor: !imageValue ? "#ccc" : "#0c8f00",
                        cursor: !imageValue ? "not-allowed" : "pointer",
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

        <DeleteVideoPopup isopen={isDeletePopUp}>
          <div className="delete-pop-up-inner">
            <div className="delete-pop-up-inner-top"><h2>Delete</h2></div>
            <div className="are-you-sure-you-want-text"><p>Are you sure you want to delete this video?</p></div>
            <div className="delete-popup-btn-div">
              <button onClick={() => setIsDeletePopup(false)} className="delete-popup-btn-div-cancel">Cancel</button>
              <button
                onClick={() => {
                  handleDelete(postToDelete);
                  setIsDeletePopup(false);
                }}
                className="delete-popup-btn-div-yes"
              >
                Yes
              </button>
            </div>
          </div>
        </DeleteVideoPopup>

        <div className="player-video-main-header">
          <div className="my-video-text"><h1>My Videos</h1></div>
          <div className="my-video-upload-btn">
            <button onClick={() => setIsPopUpOpen(true)} className="upload-new-video-btn">Upload New Video</button>
          </div>
        </div>

        <div className="all-my-mapped-videos">
          {videos?.length > 0 ? (
            videos?.map((vid, index) => (
              <div key={index} className="One-posted-video">
                <div className="video-div-top">
                  <video controls width="100%">
                    <source src={vid.media} type="video/mp4" />
                  </video>
                </div>
                <div className="video-text-div-buttom">
                  <div className="video-text-div-buttom-wrap">
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
