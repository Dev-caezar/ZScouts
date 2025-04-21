import "./adminPlayersManagement.css";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useState } from "react";

const AdminPlayersManagement = () => {
  const [playerManagement, setPlayerManagement] = useState([
    { id: "101", name: "Micheal Onyekachi", position: "midfielder", sub: "free", date: "25/04/2025" },
    { id: "102", name: "John Doe", position: "defender", sub: "paid", date: "21/03/2025" },
    { id: "103", name: "Jane Smith", position: "striker", sub: "free", date: "10/01/2025" }
  ]);

  const BASE_URL2 = "https://zscouts.onrender.com";

  const handleDeletePlayer = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL2}/players/${id}`);
      console.log("Player account deleted successfully", res.data);
      
      
      setPlayerManagement(prev => prev.filter(player => player.id !== id));
    } catch (err) {
      console.error("Failed to delete player", err);
    }
  };

  return (
    <div className="AdminPlayersManagement-wrapper">
      <div className="playersManagement-div">
        <span className="playerManagement-head">Player Management</span>
        {playerManagement.map((management) => (
          <div key={management.id}>
            <section className="playerManager-section">
              <aside className="playerManager-aside">
                <div className="playermanagement-image"></div>
                <p className="management-p-tap">{management.name}</p>
              </aside>
              <p className="management-p-tap">{management.position}</p>
              <p className="management-p-tap">{management.sub}</p>
              <p className="management-p-tap">Joined: {management.date}</p>
              <MdDeleteForever
                onClick={() => handleDeletePlayer(management.id)}
                size={30}
                style={{ cursor: "pointer", color: "red" }}
              />
            </section>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPlayersManagement;
