import Title from "antd/es/skeleton/Title";
import "./playerdetails.css"
import { IoStarOutline } from "react-icons/io5";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
const PlayerDetails = () => {

    const playerDetails=[
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
        {id:1, Title:"Match Highlights-June 2024", description:"Uploaded on june 12, 2024"},
    ]
  return (
    <div className="playerDetails-wrapper">
      <section className="playerDetails-second-nameImagge-wrap">
        <PiArrowBendUpLeftBold size={60}/>
       <div className="playerDetails-second-imageName-wrap">
       <div className="playerDetails-image"></div>
       <div className="playerDetails-div">
       <span className="playerDetailstName">Egbujor24</span>
       <p className="playerDetails-position">mildfielder</p>
       <p className="playerDetails-age">Age 18</p>
       <div className="playerDetails-rating">
       <IoStarOutline size={20}/>
       <IoStarOutline size={20}/>
       <IoStarOutline size={20}/>
       <IoStarOutline size={20}/>
       <IoStarOutline size={20}/>
       </div>
       </div>
       </div>
      </section>



      <section className="playerDetails-videos-wrap">
       <div className="playerDetails-videos">
        <div className="playerDetails-h6-h5-div">
        <h6 className="playerDetails-h6">Videos</h6>
          <h5 className="playerDetails-h5">View player's profile</h5>
        </div>
       <article className="theVideos-wrap">
        {playerDetails.map((playerdetails, index)=>(
            <>
            <div key={index} className="thevideo">
                <div className="click-video"></div>
            <h2 className="playerDetails-h2">{playerdetails.Title}</h2>
            <p className="playerDetails-description">{playerdetails.description}</p>
            <div className="playerDetails-rating">
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       <IoStarOutline size={25}/>
       </div>
            </div>
            </>
        ))}
       </article>
       </div>
      </section>

      

      <section className="upgrageSection-wrap">
        <div className="upgrageSection">
            <span className="freePlan-text">You’re on the Free Plan</span>
            <p className="playerDetails-information">To access Player’s contact information, update to premium</p><br />
            <button className="playerDetails-button">Upgrade to premium</button>
        </div>
      </section>
    </div>
  )
}

export default PlayerDetails
