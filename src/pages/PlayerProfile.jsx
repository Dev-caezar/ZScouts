import React from 'react';
import "../styles/playerProfile.css"
import Profiletracker from '../components/layout/static/Profiletracker';

const PlayerProfile = () => {
  return (
    <div className='playerProfile_body'>
      <div className="profile_wrapper">
        <Profiletracker />
      </div>
    </div>
  )
}

export default PlayerProfile
