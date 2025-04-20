import React from 'react'
import "../styles/getoneplayervideo.css"
import { IoIosStar } from 'react-icons/io';
import { TbArrowBackUp } from "react-icons/tb";

const GetOnePlayerVideo = () => {
    const players = [
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
        {
            image: "",
            name: "",
            position: "",
        },
    ]
  return (
    <div className='get-one-player-video-main'>
        <div className='get-one-player-video-main-wrap'>
            <div className='get-one-div-top'>
                <div className='get-one-div-top-top'>
                    <button className='my-go-back-button'><TbArrowBackUp /></button>
                </div>
                <div className='get-one-video-div'>
                <video controls width="100%">
                      <source src="" type='video/mp4' />
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
                        <div className='get-one-player-rating-div'><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}></IoIosStar></div>
                    </div>
                </div>
                <div className='get-one-profile-main-iner-2'>
                    <div className='rating-inner-div'>
                        <div className='rating-inner-div-1'>Rate this video</div>
                        <div className='rating-inner-div-2'><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/></div>
                    </div>
                </div>
            </div>
            </div>
            <div className='get-one-recommendations'>
                <div className='get-one-recommendation-top'>Recommendations</div>
                <div className='get-one-recommendation-video'>
                   
                        {
                            players.map(()=>(
                                <div className='one-player-profile-recommendation'>
                                    <div className='one-player-profile-recommendation-div-1'>
                                        <div className='one-player-profile-recommendation-div-1-image'>
                                            <img src="/src/assets/wisdomimage.png" alt="img" />
                                        </div>
                                        <div className='one-player-profile-recommendation-div-1-text'>
                                            <div className='one-player-profile-recommendation-div-1-name'>Osuji Wisdom</div>
                                            <div className='one-player-profile-recommendation-div-1-position'>Striker</div>
                                            <div className='one-player-profile-recommendation-div-1-years'>18 years</div>
                                        </div>
                                    </div>
                                    <div className='one-player-profile-recommendation-div-2'><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}/><IoIosStar style={{cursor: "pointer"}}></IoIosStar></div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetOnePlayerVideo