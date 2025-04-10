
import "./opportunities.css"


const Opportunities = () => {

  const HowItWorks=[
    {id:1,number:1, heading:"Created Your Profile",paragraph:"sign up, fill in your details,and upload your best highlight"},
    {id:2,number:2, heading:"Showcase Your Talent",paragraph:"Add videos, stats, and achievements to attract scouts."},
    {id:3,number:3, heading:"Get Discovered",paragraph:"Scouts browse profiles and reach out to promising players"},
    {id:4,number:4, heading:"Secure Opportunities",paragraph:"Engage with scouts,schedule trials, and take your career to the next level"}
  ]
  
  return (
    <div className="opportunity_body">
      <div className="opportunities-wrapper">
      <div className="howItWorks">
        <div className="howItWorks-image">
          <div className="howitworks_img_card">
          <img src="/src/assets/public/myfoto.jpeg" alt="" />
          </div>
        </div>
        <div className="howItWorks-text">
          <p>How it Works?</p>
          <h4>Connect. Showcase. Get <br /> Scouted.</h4><br />
         {HowItWorks.map((Howitworks, index)=>(
         <div key={index} className="howItWorks-text-wrapper">
          <h4>{Howitworks.id}.{Howitworks.heading}</h4>
          <p>{Howitworks.paragraph}</p>
         </div>
         ))}
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Opportunities
