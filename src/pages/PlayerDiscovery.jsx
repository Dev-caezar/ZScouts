import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/playerdiscovery.css";
import 'animate.css';
import LogoCycle2 from "../assets/LogoCycle2.png"
import { RxReload } from "react-icons/rx";
const PlayerDiscovery = () => {
  const [players, setPlayers] = useState([]);
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

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/players/allplayers`);
        console.log("Fetched players:", response.data.data);
        setPlayers(response.data.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

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
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <div className="player-card" key={index}>
                <img
                  src={player.profileImage || "public/placeholder-player.png"}
                  alt={player.fullname}
                  className="player-img"
                />
                <div className="player-details">
                  <h4>{player.fullname}</h4>
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
            ))
          ) : (
            <div className="loadingPage">
              <div className="loading-cycle">
            <img src={LogoCycle2} alt="" className="LogoCycle2" />
              </div>
              <div className="favicondiv"></div>
            </div>
    
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerDiscovery;
