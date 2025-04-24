import React, { useState, useRef } from 'react';
import { MdCancel, MdOutlineVideoLibrary } from "react-icons/md";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../styles/popup.css";

const Popup = ({ isopen, onclose, fetchVideos }) => {
  const [video, setVideo] = useState("");
  const [isVideo, setIsVideo] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const BASE_URL = "https://zscouts.onrender.com";
  const playerId = useSelector((state) => state.player.playerKyc);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split('/')[0];
    if (fileType === 'video') {
      setSelectedFile(file);
      setIsVideo(true);
      setVideo(URL.createObjectURL(file));
      setIsPreviewVisible(true);
      setPostSuccess(true);
    } else {
      toast.warning('Only video files are allowed!');
      e.target.value = '';
    }
  };

  const handlePost = async () => {
    if (!selectedFile) {
      toast.warning("No video file selected.");
      return;
    }

    setIsPosting(true);
    try {
      const formData = new FormData();
      formData.append('playerId', playerId.id);
      formData.append('video', selectedFile);
      formData.append('description', description);

      await axios.post(`${BASE_URL}/api/v1/videoupload/${playerId.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Video uploaded successfully!');
      setIsPreviewVisible(false);
      setVideo("");
      setDescription("");
      setSelectedFile(null);
      fileInputRef.current.value = '';
      setPostSuccess(false);
      if (fetchVideos) fetchVideos();
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error(error?.response?.status === 413
        ? "Upload failed: File size exceeds 25MB limit!"
        : "Failed to upload video.");
    } finally {
      setIsPosting(false);
    }
  };

  if (!isopen) return null;

  return (
    <div className='popup-overlay'>
      <div className='pop-up-content'>
        <div className="content_header">
          <h4>Editor</h4>
          <MdCancel className='vcancel_icon' onClick={onclose} />
        </div>

        <div className="uploadvideo_body">
          {isPreviewVisible ? (
            <>
              <video src={video} controls width="100%" style={{ borderRadius: "10px" }} />
              <textarea
                placeholder="Write a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "100%", marginTop: "10px", padding: "10px" }}
              />
            </>
          ) : (
            <>
              <MdOutlineVideoLibrary className='upload_icon' />
              <h4>Select files to begin</h4>
              <p>Share images or a single video in your upload.</p>
              <button className="vid_cta" onClick={handleUploadClick}>
                Upload from computer
              </button>
              <input
                type="file"
                accept="video/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={getImageUrl}
              />
            </>
          )}
        </div>

        <div className="upload_footer">
          {postSuccess && (
            <button
              className='post_cta'
              onClick={handlePost}
              disabled={isPosting}
            >
              {isPosting ? "Posting..." : "Post"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
