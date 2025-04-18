import React, {  useState } from "react";
import "../styles/playerdiscovery.css";

const PlayerDiscovery = () => {
  // const [athlete, setAthlete] = useState ([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [nestedOptions, setNestedOptions] = useState([]);
  const [selectedNestedOption, setSelectedNestedOption] = useState("");

  const options = ["Position", "foot"];

  const optionValues = {
    Position: ["ST", "MF", "DEF", "GK"],
    foot: ["Left", "Right", "Both"],
  };

  const BASE_URL = "https://zscouts.onrender.com";

// const handleApply = async () => {
//   try {
//     const response = await axios.post(`${}`)
//   }
// };


  const players = [
    {
      name: "Michael Onyekachi",
      age: 27,
      foot: "Both foot",
      position: "ST",
      image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
    },
    {
      name: "John Doe",
      age: 24,
      foot: "Right foot",
      position: "MF",
      image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
    },
    {
      name: "Samuel Smith",
      age: 29,
      foot: "Left foot",
      position: "DEF",
      image: "public/WhatsApp Image 2025-03-27 at 5.33.36 PM 1.png",
    },

  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setNestedOptions(optionValues[option]);
    setSelectedNestedOption("");
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedOption("");
    setNestedOptions([]);
    setSelectedNestedOption("");
  };

  const handleApply = () => {
    console.log("Applied Filter:", selectedOption, selectedNestedOption);
  };

  const filteredPlayers = players.filter((player) => {
    if (!selectedOption || !selectedNestedOption) return true;
    if (selectedOption === "Position") {
      return player.position === selectedNestedOption;
    }
    if (selectedOption === "foot") {
      return player.foot === selectedNestedOption;
    }
    return true;
  });

  return (
    <div className="scoutdiscovery">
      <div className="scoutdiscoveryform">
        <div className="input-wrapper">
          <input
            type="text"
            className="selectoption"
            placeholder="Select option"
            value={selectedOption}
            onClick={toggleDropdown}
            readOnly
          />
          <img
            src="public/weui_arrow-filled (1).svg"
            alt="dropdown icon"
            className="dropdownicon"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option, index) => (
                <li key={index} onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedOption && nestedOptions.length > 0 && (
          <div className="input-wrapper">
            <select
              className="selectoption"
              value={selectedNestedOption}
              onChange={(e) => setSelectedNestedOption(e.target.value)}
            >
              <option value="">Select {selectedOption}</option>
              {nestedOptions.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              
              ))}
             
            </select>
          </div>
        )}

        <div className="filterbuttons">
          <button className="clear_btn" onClick={handleClear}>
            Clear
          </button>
          <button className="apply_btn" onClick={handleApply}>
            Apply filter
          </button>
        </div>
      </div>

      <div className="player_discoverylist">
        <div className="discoveryList-div">
          {filteredPlayers.map((player, index) => (
            <div className="player-card" key={index}>
              <img
                src={player.image}
                alt={player.name}
                className="player-img"
              />
              <div className="player-details">
                <h4>{player.name}</h4>
                <p>
                  {player.age} years | {player.foot}
                </p>
                <p>
                  <strong>{player.position}</strong>
                </p>
              </div>
              <div className="player-rating">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDiscovery;
