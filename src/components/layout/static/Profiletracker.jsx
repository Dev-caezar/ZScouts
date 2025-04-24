import React from 'react'
import "../../../styles/profileTracker.css"
import { Flex, Progress } from 'antd'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const Profiletracker = () => {
  const navigate = useNavigate()
  const player = useSelector((state) => state.player.playerKyc)

  const handleEditProfile = () => {
    navigate("/edit_profile")
  }

  const calculateKycProgress = (player) => {
    const requiredFields = [
      'age', 'nationality', 'gender', 'height', 'weight', 'preferredFoot',
      'phoneNumber', 'homeAddress', 'primaryPosition', 'secondaryPosition',
      'currentClub', 'ability', 'followDiet', 'contactInfoOfCoaches',
      'openToTrials', 'willingToRelocate', 'media'
    ];

    const filledFields = requiredFields.filter(field => {
      const value = player?.[field];
      return value !== undefined && value !== "" && value !== null;
    });

    const percent = Math.round((filledFields.length / requiredFields.length) * 100);
    return percent;
  }

  const progressPercent = calculateKycProgress(player)

  return (
    <div className='profile_tracker_body'>
      <div className="profile_tracker_wrapper">
        <div className="tracker_text">
          <div className="progress">
            <Flex align="center" wrap gap={30}>
              <Progress
                type="dashboard"
                percent={progressPercent}
                size={65}
                trailColor="black"
                strokeColor="green"
              />
            </Flex>
          </div>
          <div className="text_head">
            <h4>{!player? "Complete Your Profile to Get Noticed!": "Congratulations you have successfully completed your profile"}</h4>
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
