import React, { useEffect, useState } from 'react';
import "../../styles/playerDetails.css";
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

import { CgMenuRight } from "react-icons/cg";
import { Drawer } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
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
  console.log(firstInitial)
   const loadingIcon = (
      <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />
    );

  if (!player) {
    return(
      <div className="loader">
          <Flex>
            <Spin indicator={loadingIcon} />
          </Flex>
      </div>
    )
  }

  return (
    <div className='player_details_body'>
      <div className="detais_body_wrapper">
        <div className="back_card">
          <IoReturnUpBackOutline className='back_icon' onClick={handleBack} />
        </div>
       <article className="theVideos-wrap">
        {playerDetails.map((playerdetails, index)=>(
            <>
            <div key={index} className="thevideo">
                <div className="click-video"></div>
            <h2 className="playerDetails-h2">{playerdetails.Title}</h2>
            <p className="playerDetails-description">{playerdetails.description}</p>
            <div className="playerDetails-rating">
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       </div>
            </div>
            </>
        ))}
       </article>
       </div>
      </section>

      

      <section className="upgrageSection-wrap">
        <div className="upgrageSection">
            <span className="freePlan-text">You’re on the Free Plan</span>
            <p className="playerDetails-information">To access Player’s contact information, update to premium</p><br />
            <button className="playerDetails-button">Upgrade to premium</button>
        </div>
      </section>
    </div>
  );
};

export default PlayerDetails;
