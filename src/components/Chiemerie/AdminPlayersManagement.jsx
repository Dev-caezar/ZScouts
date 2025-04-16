import "./adminPlayersManagement.css"
import { MdDeleteForever } from "react-icons/md";
const AdminPlayersManagement = () => {
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
  return (
    <div className=' AdminPlayersManagement-wrapper'>
    <div className="playersManagement-div">
      <span className="playerManagement-head">Player Management</span>
      {playerManagement.map((management,index)=>(
        <>
        <section className="playerManager-section">
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
    </div>
  )
}

export default AdminPlayersManagement
