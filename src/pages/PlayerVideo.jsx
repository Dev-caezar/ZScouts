import React, { useEffect, useState } from 'react'
import "../styles/playervideo.css"
import { IoIosStar, IoMdVideocam } from 'react-icons/io'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Popup from '../components/Popup'

const PlayerVideo = () => {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const [imageValue, setImageValue] = useState()
  const [post, setPost] = useState([]);
  const [isPosting, setIsposting] = useState(false)
  const [isVideo, setIsVideo] = useState(false);

  const handleDelete = (id) => {
    const upDatedPost = post.filter((post)=> post.id !== id);
    setPost(upDatedPost);
    localStorage.setItem("post", JSON.stringify(upDatedPost));
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
    if( !imageValue) return;
    setIsposting(true)

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
    });

     setIsposting(false);
  }, 2000);

    
};

useEffect(()=>{
    const savedPost = JSON.parse(localStorage.getItem("post"));
    if(savedPost){
        setPost(savedPost)
    }
}, []);


const getImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split('/') [0];

   if (fileType === 'image'){
    setIsVideo(false);
    const reader = new FileReader();
    reader.readAsDataURL(file);
   reader.onload = () => {
      setImageValue(reader.result);
   };
   } else if (fileType === 'video'){
    setIsVideo(true);
    setImageValue(URL.createObjectURL(file));
   }
};

  return (
    <div className='player-video-main' >
      <div className='player-video-main-wrap'>
      <Popup isopen={isPopUpOpen} onclose={()=>{setIsPopUpOpen(false)}}>
          <div className='pop-up-inner-content'>
            <div className='popup-header'>
              <div className='create-post-div'><h1>Create Post</h1></div>
             <div className='cancel-btn-div'> <button onClick={()=>{setIsPopUpOpen(false)}} className='pop-up-cancel-btn'>X</button></div>
            </div>
            <div className='popup-bottom'>
              <div className='uploaded-video-div'>
                <div className='uploaded-video-div-wrap'>
                {imageValue && isVideo ? (
                            <video controls width="100%">
                                <source src={imageValue} type='video/mp4'/>
                            </video>
                        ) : (
                            <img src={imageValue} alt='preview'/>
                        )}
                </div>
              </div>
              <div className='uploaded-video-inner-btm'>
                <div className='uploaded-video-inner-btm-wrap'>
                  <div className='add-to-your-post-div'>
                    <div className='add-to-your-post-div-text'><p>Add to your post</p></div>
                    <div className='add-to-your-post-div-icon'>
                      <input type="file" id='l' accept='image/*, video/*' hidden onChange={getImageUrl} />
                      <label htmlFor="l" className='my-upload-video-icon' ><IoMdVideocam style={{cursor: "pointer"}}/></label>
                    </div>
                  </div>
                  <div className='post-btn-div'>
                    <button className='post-btn-div-main' onClick={handlePost} disabled={!imageValue} style={{backgroundColor: !imageValue ? "#ccc" : "#07232f", cursor: !imageValue ? "not-allowed" : "pointer", opacity: isPosting ? 0.6 : 1}} ><h2>{isPosting ? "Posting..." : "Post"}</h2></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popup>
        <div className='player-video-main-header'>
          <div className='my-video-text'><h1>My Videos</h1></div>
          <div className='my-video-upload-btn'>
            <button onClick={()=>{setIsPopUpOpen(true)}} className='upload-new-video-btn'>Upload New Video</button>
          </div>
        </div>
        <div className='all-my-mapped-videos'>
          { post.length === 0 ? <h3 style={{color: "red"}}>No videos posted yet </h3> : (
            post.map((post)=>(
              <div className='One-posted-video' key={post.id} >
                <div className='video-div-top'>
                {post.isVideo ? (
                                <video controls width="100%">
                                    <source src={post.image} type='video/mp4' />
                                </video>
                            ) : (
                                <img src={post.image} alt='uploaded'/>
                            )}
                </div>
                <div className='video-text-div-buttom'>
                  <div className='video-text-div-buttom-wrap'>
                  <div className='match-highlight-text'><h1>Match Highlights - April 2025</h1></div>
                  <div className='time-of-video-posted'><p>{getTimeAgo(post.timestamp)}</p></div>
                  <div className='rating-and-delete'>
                    <div className='video-rating-div'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                    <div className='video-delete-div'><button onClick={()=> handleDelete(post.id)} className='my-video-delete-btn'><RiDeleteBin6Fill style={{fontSize: "17px"}} /> Delete</button></div>
                  </div>
                  </div>
                </div>
              </div>
            )))
          }
        </div>
            <div className='down-div-footer'></div>
      </div>
    </div>
  )
}

export default PlayerVideo
