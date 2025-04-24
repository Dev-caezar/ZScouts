import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/playerdiscovery.css";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Rating } from "@mui/material";

const PlayerDiscovery = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [nestedOptions, setNestedOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedNestedOption, setSelectedNestedOption] = useState("");

  const options = ["Position", "preferredFoot"];

  const optionValues = {
    Position: ["ST", "MF", "DEF", "GK"],
    preferredFoot: ["Left", "Right", "Both"],
  };

  const BASE_URL = "https://zscouts.onrender.com";

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/players/allplayers`);
        setLoading(false);
        setPlayers(response.data.data);
      } catch (error) {
        console.error("Error fetching players:", error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleGetOne = (id) => {
    navigate(`/player_details/${id}`);
  };

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
      return player.playerKyc?.secondaryPosition === selectedNestedOption;
    }
    if (selectedOption === "preferredFoot") {
      return player.playerKyc?.preferredFoot === selectedNestedOption;
    }
    return true;
  });

  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />
  );

  if (loading) {
    return (
      <div className="loader">
        <Flex>
          <Spin indicator={loadingIcon} />
        </Flex>
      </div>
    );
  }

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
              <div
                className="player-card"
                key={index}
                onClick={() => handleGetOne(player.id)} 
              >
                 {player?.playerKyc?.profilePic ? (
                   <div className="player-img-placeholder">
                  <img
                    src={player.playerKyc.profilePic}
                    alt={player.fullname}
                  />
                 </div>
                  
                ) : (
                  <div className="player-img-placeholder">
                    {player.fullname?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="player-details">
                  <h4>{player?.fullname}</h4>
                  {/* <h4>{player.playerKyc?.age ? `${player.playerKyc.preferredFoot} Years` : '-'}</h4> */}
                  <h4>{player?.playerKyc?.preferredFoot} Foot</h4>
                  <h4>{player?.playerKyc?.secondaryPosition}</h4>
                </div>
                <Rating 
                name="legend" 
                value={player?.ratings?.[0]?.ratingScore || 0} 
                disabled 
              />
              </div>
            ))
          ) : (
            <h5 style={{ color: "grey" }}>No players found</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerDiscovery;
