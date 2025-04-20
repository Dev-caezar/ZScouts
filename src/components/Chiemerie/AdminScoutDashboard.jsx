import "./adminScoutDashboard.css"
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
const AdminScoutDashboard = () => {
  const playerManagement=[
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
    {id:1, name:"Micheal Onyekachi", position:"mildfielder", sub:"free", date:"25/04/2025"},
  ]
  const BASE_URL2 = "https://zscouts.onrender.com";
   const handleDeleteScout = async (id) => {
      try {
        const res = await axios.delete(`${BASE_URL2}/scouts/${id}`);
        console.log("Scout account deleted successfully", res.data);
      } catch (err) {
        console.error("Failed to delete scout", err);
      }
    };
  return (
    <div className="AdminscoutsManagement-wrapper">
       <div className="playersManagement-div">
      <span className="playerManagement-head">Scout Management</span>
      {playerManagement.map((management,index)=>(
        <>
        <section key={index} className="playerManager-section">
        <aside className="playerManager-aside">
          <div className="playermanagement-image"></div>
          <p className="management-p-tap">{management.name}</p>
        </aside>
           <p className="management-p-tap">{management.position}</p>
           <p className="management-p-tap">{management.sub}</p>
           <p className="management-p-tap">Joined: {management.date}</p>
           <MdDeleteForever size={30}/>
        </section><hr />
        </>

      ))}
    </div>
    <div className="adminVerification-action"></div>
    </div>
  )
}

export default AdminScoutDashboard
