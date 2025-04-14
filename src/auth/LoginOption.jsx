import React, { useState } from 'react'
import "../styles/loginOption.css"
import { useNavigate } from 'react-router';

const LoginOption = () => {
     const [selectedRole, setSelectedRole] = useState(null);
        const navigate = useNavigate();
    
        const handleSelect = (role) => {
            switch (role) {
                case 'PLAYER':
                    setSelectedRole('PLAYER');
                    break;
                case 'SCOUT':
                    setSelectedRole('SCOUT');
                    break;
                default:
                    break;
            }
        };
       
  return (
    <div className='loginoption_body'>
      <div className="login_option_card">
                    <div className="login_card_head">
                        <h2>Login</h2>
                        <p>As a Player or Scout</p>
                    </div>
                    <div className="login_option_container">
                        <div className="login_option_wrapper">
                            <div className={`login_option ${selectedRole === 'PLAYER' ? 'selected' : ''}`} 
                                onClick={() => handleSelect('PLAYER')}>
                                <div className="loginoption_card_img">
                                    {
                                        selectedRole === 'PLAYER' ?
                                    <img src="/src/assets/white_boot.png" alt="Player Icon" />:
                                    <img src="/src/assets/player_boot.jpg" alt="" />
                                    }
                                </div>
                                <p>Player</p>
                            </div>
                            <div className={`login_option ${selectedRole === 'SCOUT' ? 'selected' : ''}`} 
                                onClick={() => handleSelect('SCOUT')}>
                                <div className="loginoption_card_img">
                                    {
                                        selectedRole === 'SCOUT' ?
                                    <img src="/src/assets/white_icon.png" alt="Scout Icon" />:
                                    <img src="/src/assets/scout_icon.svg" alt="Scout Icon"/>
                                    }
                                </div>
                                <p>Scout</p>
                            </div>
                        </div>
                        <button style={{cursor: "pointer"}} className={`login_select_option ${selectedRole ? 'active' : ''}`} 
                            disabled={!selectedRole} 
                            onClick={() => {
                                handleSelect(selectedRole); 
                                if (selectedRole === 'PLAYER') {
                                navigate("/player_login"); 
                                } else if (selectedRole === 'SCOUT') {
                                navigate("/scout_login");
                                }
                            }}>
                            <p>Select</p>
                            </button>

                    </div>
                </div>
      </div>
  )
}

export default LoginOption
