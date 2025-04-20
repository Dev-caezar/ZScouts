import React from 'react'
import "../../../styles/profileTracker.css"
import { Flex, Progress } from 'antd'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const Profiletracker = () => {
  const navigate = useNavigate()

  const player= useSelector((state)=> state.player.playerDetails.id)
  // console.log("this is my id", player)
  const handleEditProfile =()=>{
    navigate("/edit_profile")
  }
  return (
    <div className='profile_tracker_body'>
      <div className="profile_tracker_wrapper">
        <div className="tracker_text">
          <div className="progress">
            <Flex align="center" wrap gap={30}>
                <Progress type="dashboard" 
                  percent={70} 
                  size={65}  
                  trailColor="black" 
                  strokeColor="green"
                />
            </Flex>
          </div>
          <div className="text_head">
            <h4>Complete Your Profile to Get Noticed!</h4>
            <p>Scouts are looking for top talent—fill in your details to stand out!
            It only takes a few minutes.</p>
          </div>
        </div>
        <div className="tracker_btn">
          <button className='progress_cta' onClick={handleEditProfile}>Complete profile</button>
        </div>
      </div>
    </div>
  )
}

export default Profiletracker
