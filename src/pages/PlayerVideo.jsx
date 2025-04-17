import React, { useEffect, useState } from 'react';
import "../styles/playervideo.css";
import { IoIosStar, IoMdVideocam } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Popup from '../components/Popup';
import DeleteVideoPopup from '../components/DeleteVideoPopUp';
import { toast } from 'react-toastify';
import { FaVideo } from "react-icons/fa";

const PlayerVideo = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [imageValue, setImageValue] = useState();
  const [post, setPost] = useState([]);
  const [isPosting, setIsposting] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isDeletePopUp, setIsDeletePopup] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleDelete = (id) => {
    const upDatedPost = post.filter((post) => post.id !== id);
    setPost(upDatedPost);
    localStorage.setItem("post", JSON.stringify(upDatedPost));
  };

  const handleCloseAllPopups = () => {
  setIsPreviewVisible(false);
  setIsPopUpOpen(false);
};


  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) return "Uploaded Just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes === 1) return "Uploaded 1 minute ago";
    if (diffInMinutes < 60) return `Uploaded ${diffInMinutes} minutes ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours === 1) return "Uploaded 1 hour ago";
    if (diffInHours < 24) return `Uploaded ${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Uploaded 1 day ago";
    return `Uploaded ${diffInDays} days ago`;
  };

  const handlePost = () => {
    if (!imageValue) return;
    setIsposting(true);

    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        image: imageValue,
        timestamp: new Date().toLocaleString(),
        isVideo,
      };
      const upDatedPost = [newPost, ...post];
      setPost(upDatedPost);
      localStorage.setItem("post", JSON.stringify(upDatedPost));
      setImageValue("");

      setTimeout(() => {
        setIsPopUpOpen(false);
        setIsPreviewVisible(false);
      });

      setIsposting(false);
    }, 2000);
  };

  useEffect(() => {
    const savedPost = JSON.parse(localStorage.getItem("post"));
    if (savedPost) {
      setPost(savedPost);
    }
  }, []);

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split('/')[0];

    if (fileType === 'video') {
      setIsVideo(true);
      setImageValue(URL.createObjectURL(file));
      setIsPreviewVisible(true); 
    } else {
      toast.warning('Only video files are allowed!');
      e.target.value = '';
    }
  };

  return (
    <div className="player-video-main">
      <div className="player-video-main-wrap">

        <Popup isopen={isPopUpOpen} onclose={() => setIsPopUpOpen(false)}>
          <div className="pop-up-inner-content">
            <div className="popup-header">
              <div className="create-post-div"><h1>Editor</h1></div>
              <div className="cancel-btn-div"><button onClick={() => setIsPopUpOpen(false)} className="pop-up-cancel-btn">X</button></div>
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
                    <video controls width="100%" >
                      <source src={imageValue} type='video/mp4'/>
                    </video> 
                  ) : (
                     <img src={imageValue} alt="preview" />
                  )
                  }
                </div>
                <div className='text-area-div'>
                  <div className='text-area-div-1'><textarea name="" id="" className='my-text-area-main-main' placeholder='Add description...'></textarea></div>
                  <div className='text-area-div-2'>
                    <button onClick={handlePost} disabled={!imageValue} style={{backgroundColor: !imageValue ? "#ccc" : "#0c8f00", cursor: !imageValue ? "not-allowed" : "pointer", opacity: isPosting ? 0.6 : 1  }} className='post-video-div'>{isPosting ? ( <div className="spinner"></div>) : "Post"}</button>
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
              <button onClick={() => { handleDelete(postToDelete); setIsDeletePopup(false); }} className="delete-popup-btn-div-yes">Yes</button>
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
          {post.length === 0 ? <h5 style={{ color: "red" }}>No videos posted yet</h5> : (
            post.map((post) => (
              <div className="One-posted-video" key={post.id}>
                <div className="video-div-top">
                  {post.isVideo ? (
                    <video controls width="100%">
                      <source src={post.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={post.image} alt="uploaded" />
                  )}
                </div>
                <div className="video-text-div-buttom">
                  <div className="video-text-div-buttom-wrap">
                    <div className="match-highlight-text"><h1>Match Highlights - April 2025</h1></div>
                    <div className="time-of-video-posted"><p>{getTimeAgo(post.timestamp)}</p></div>
                    <div className="rating-and-delete">
                      <div className="video-rating-div"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                      <div className="video-delete-div"><button onClick={() => { setPostToDelete(post.id); setIsDeletePopup(true); }} className="my-video-delete-btn"><RiDeleteBin6Fill style={{ fontSize: "17px" }} /> Delete</button></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="down-div-footer"></div>
      </div>
    </div>
  );
};

export default PlayerVideo;
