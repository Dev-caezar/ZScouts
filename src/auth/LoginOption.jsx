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
                                    <img src="/src/assets/public/player_boot.svg" alt="Player Icon" 
                                        style={{ fill: selectedRole === 'PLAYER' ? "#0C8F00": 'gray' }}/>
                                </div>
                                <p>Player</p>
                            </div>
                            <div className={`login_option ${selectedRole === 'SCOUT' ? 'selected' : ''}`} 
                                onClick={() => handleSelect('SCOUT')}>
                                <div className="loginoption_card_img">
                                    <img src="/src/assets/public/scout_icon.svg" alt="Scout Icon" 
                                        style={{ fill: selectedRole === 'SCOUT' ? 'green' : 'gray' }}/>
                                </div>
                                <p>Scout</p>
                            </div>
                        </div>
                        <button className={`login_select_option ${selectedRole ? 'active' : ''}`} 
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
