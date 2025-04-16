import React, { useState } from 'react';
import "../styles/signupOption.css";
import { useNavigate } from 'react-router';
import whiteimg from "../assets/white_icon.png";
import player_boot from "../assets/player_boot.jpg";
import whiteBoot from "../assets/white_boot.png";
import scoutIcon from "../assets/scout_icon.jpg";

const SignupOption = () => {
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
     <div className='signupOption_body'>
            <div className="s_option_card">
             <div className="s_card_head">
                <h2>Sign up</h2>
                <p>As a Player or Scout</p>
            </div>
            <div className="s_option_container">
              <div className="s_option_wrapper">
                <div className={`signup_option ${selectedRole === 'PLAYER' ? 'selected' : ''}`} 
                    onClick={() => handleSelect('PLAYER')}>
                    <div className="signup_card_img">
                        {
                            selectedRole === "PLAYER" ?
                            <img src={whiteBoot} alt="Player Icon"/>:
                            <img src={player_boot} alt="Player Icon"/>

                        }
                    </div>
                    <p>Player</p>
                </div>
                <div className={`signup_option ${selectedRole === 'SCOUT' ? 'selected' : ''}`} 
                     onClick={() => handleSelect('SCOUT')}>
                     <div className="signup_card_img">
                        {
                            selectedRole === "SCOUT" ?
                            <img src={whiteimg} alt="Scout Icon"/>:
                            <img src={scoutIcon} alt="Scout Icon"/>
                        }
                        </div>
                        <p>Scout</p>
                    </div>
                </div>
               <button style={{cursor: "pointer"}} className={`select_option ${selectedRole ? 'active' : ''}`} 
                    disabled={!selectedRole} 
                    onClick={() => {
                    handleSelect(selectedRole); 
                    if (selectedRole === 'PLAYER') {
                    navigate("/player_register"); 
                    } else if (selectedRole === 'SCOUT') {
                    navigate("/scout_register");
                    }}}>
                    <p>Select</p>
               </button>

             </div>
        </div>
    </div>
    );
}

export default SignupOption;
