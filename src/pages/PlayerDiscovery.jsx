import React, { useState } from 'react'
import '../styles/playerdiscovery.css';

const PlayerDiscovery = () => {
const[isOpen, setIsOpen] = useState (false);
const [selectedOption, setSelectedOption] = useState('');

const options = [
  'Position',
  'foot'
];

const players = [
  {
    name: "Michael Onyekachi",
    age: 27,
    foot: "Both foot",
    position: "Striker",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png", 
  },
  {
    name: "John Doe",
    age: 24,
    foot: "Right foot",
    position: "Midfielder",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
  },
  {
    name: "Samuel Smith",
    age: 29,
    foot: "Left foot",
    position: "Defender",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
  },
  {
    name: "Samuel Smith",
    age: 29,
    foot: "Left foot",
    position: "Defender",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
  },
  {
    name: "Samuel Smith",
    age: 29,
    foot: "Left foot",
    position: "Defender",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
  },
  {
    name: "Michael Onyekachi",
    age: 27,
    foot: "Both foot",
    position: "Striker",
    image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png", 
  },
 
];


const toggleDropdown = () => {
  setIsOpen((prev) => !prev);
};

const handleSelect = (option) => {
  setSelectedOption(option);
  setIsOpen(false);
};

const handleClear = () => {
  setSelectedOption('');
};

const handleApply = () => {
  console.log('Applied Filter:', selectedOption);
};

  return (
    <div className='scoutdiscovery'>
      <div className='scoutdiscoveryform'>
        <div className='input-wrapper'>
          <input
            type="text"
            className='selectoption'
            placeholder='Select option'
            value={selectedOption}
            onClick={toggleDropdown}
          />
          <img
            src="public/weui_arrow-filled (1).svg"
            alt="dropdown icon"
            className="dropdownicon"
            readOnly
            onClick={toggleDropdown}
          />
           {isOpen && (
            <ul className= 'dropdown-menu'>
              {options.map((option, index) => (
                <li key={index} onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      
      <div className='filterbuttons'>
       <button className='clear_btn' onClick={handleClear}>Clear</button>
       <button className='apply_btn' onClick={handleApply}>Apply filter</button>

      </div>
      </div>
      <div className='player_discoverylist'>
  {[0, 1].map((colIndex) => (
    <div className='discoveryList-div' key={colIndex}>
      {players.map((player, index) => (
        <div className='player-card' key={index}>
          <img src={player.image} alt={player.name} className='player-img' />
          <div className='player-details'>
            <h4>{player.name}</h4>
            <p>{player.age} years | {player.foot}</p>
            <p><strong>{player.position}</strong></p>
          </div>
          <div className='player-rating'>
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className='star'>★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>
</div>
  )
}

export default PlayerDiscovery