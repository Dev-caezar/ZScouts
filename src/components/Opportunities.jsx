
import "./opportunities.css"

import { FaVideo } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { NavLink } from "react-router";
const Opportunities = () => {

  const Yzscouts =[
    {title:"Direct Connection with Scouts",description:"Get noticed by professional scouts without middle men. Upload your profile and get contacted directly by clubs and recruiters."},
    {title:"Video-Based Player Evaluation", description:"Showcase your skills with match highlights. Scouts can watch, assess, and shortlist you for trials based on your performance.",icon:<FaVideo size={25} color="rgba(12, 143, 0, 1)"/>},
    {title:"Verified Player Profiles & Insight", description:"Boost your credibility with verified stats. Scoutd get assess to your playing history, physicall attributes, and key performance data.",icon:<MdVerified FaVideo size={25} color="rgba(12, 143, 0, 1)"/>},
    {title:"Global Career Opportunities", description:"Expand beyond local leagues. connect with international scout, join virtual trial, and increase your chance of playing professional.",icon:<BsGlobeAsiaAustralia FaVideo size={25} color="rgba(12, 143, 0, 1)"/> }
  ]

  

  const HowItWorks=[
    {id:1,number:1,heading:"Created Your Profile",paragraph:"sign up, fill in your details,and upload your best highlight"},
    {id:2,number:2, heading:"Showcase Your Talent",paragraph:"Add videos, stats, and achievements to attract scouts."},
    {id:3,number:3,heading:"Get Discovered",paragraph:"Scouts browse profiles and reach out to promising players"},
    {id:4,number:4,heading:"Secure Opportunities",paragraph:"Engage with scouts,schedule trials, and take your career to the next level"}
  ]
  
  return (
    <div className="Opportunities-wrapper">
      <div className="Opportunities-connection-growth" >
        <p>Why ZScouts?</p>
        <h4>Opportunities. Connections. Growth.</h4>
        <div className="o-c-g-wrapper">
          { Yzscouts.map((whyZscout, index)=>( 
              <div key={index} className="o-c-g">
                <div className="o-c-g-IconHolder">{whyZscout.icon}</div><br /><br />
                <h5>{whyZscout.title}</h5>
                <p>{whyZscout.description}</p>
              </div> 
           ))}   
           
        </div>
      </div>

      <div className="HowItWorks">
        <div className="HowItWorks-image"></div>
        <div className="HowItWorks-text">
          <p>How it Works?</p>
          <h4>Connect. Showcase. Get <br /> Scouted.</h4><br />
         {HowItWorks.map((Howitworks, index)=>(
         <div key={index} className="HowItWorks-text-wrapper">
          <span>{Howitworks.id}.{Howitworks.heading}</span>
          <p>{Howitworks.paragraph}</p>
         </div>
         ))}
        </div>
      </div>

       <div className="nextLevel">
        <div className="nextLevelImage"> 
          <div className="nextLevelText1">
            <h5>Take Your Career to the Next Level!</h5>
            <p>Create your profile, upload your higlights, and attract scouts looking for talent like you.</p>
          </div>
          <button style={{cursor: "pointer"}} className="nextLevelText2"> Create Your Free Profile</button>
        </div>

       </div>
    </div>
  )
}

export default Opportunities
