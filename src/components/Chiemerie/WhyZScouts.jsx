import "./whyZscout.css"
import { FaVideo } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
const WhyZScouts = () => {

      const Yzscouts =[
        {title:"Direct Connection with Scouts",description:"Get noticed by professional scouts without middle men. Upload your profile and get contacted directly by clubs and recruiters.",icon:<HiLink   size={25} color="rgba(12, 143, 0, 1)"/>},
        {title:"Video-Based Player Evaluation", description:"Showcase your skills with match highlights. Scouts can watch, assess, and shortlist you for trials based on your performance.",icon:<FaVideo size={25} color="rgba(12, 143, 0, 1)"/>},
        {title:"Verified Player Profiles & Insight", description:"Boost your credibility with verified stats. Scoutd get assess to your playing history, physicall attributes, and key performance data.",icon:<MdVerified FaVideo size={25} color="rgba(12, 143, 0, 1)"/>},
        {title:"Global Career Opportunities", description:"Expand beyond local leagues. connect with international scout, join virtual trial, and increase your chance of playing professional.",icon:<BsGlobeAsiaAustralia FaVideo size={25} color="rgba(12, 143, 0, 1)"/> }
      ]

  return (
    <div className="whyZscout">
      <div className="whyZscout-wrapper">
        <div className="text_holder">
          <h4>Why ZScouts?</h4>
          <h2>Opportunities. Connections. Growth.</h2>
        </div>
        <div className="whycard_wrapper">
          {
            Yzscouts.map((i,index)=>(
              <div className="why_card">
                <div className="icon_holder">{i.icon}</div>
                <h4>{i.title}</h4>
                <p>{i.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WhyZScouts
