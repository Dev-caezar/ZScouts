
import "./opportunities.css"


const Opportunities = () => {

  const HowItWorks=[
    {id:1,number:"1: " , heading:" Created Your Profile",paragraph:"sign up, fill in your details,and upload your best highlight"},
    {id:2,number:"2: " , heading:" Showcase Your Talent",paragraph:"Add videos, stats, and achievements to attract scouts."},
    {id:3,number:"3: " , heading:" Get Discovered",paragraph:"Scouts browse profiles and reach out to promising players"},
    {id:4,number:"4: " , heading:" Secure Opportunities",paragraph:"Engage with scouts,schedule trials, and take your career to the next level"}
  ]
  
  return (
    <div className="opportunities-body">
      <div className="opportunity_wrapper">
        <div className="oppoturnity_left">
          <div className="oppoturnity_image_holder">
            <img src="/src/assets/myfoto.jpeg" alt="" />
          </div>
        </div>
        <div className="oppoturnity_right">
          <h4>How It Works?</h4>
          <h2>Connect. Showcase. Get Scouted.</h2>
          <div className="oppoturnity_container">
            {
              HowItWorks.map((i,index)=>(
                <div key={index} className="oppoturnity_card">
                  <div className="subhead">
                    <p>{i.number}  </p>
                    <h4>{i.heading}</h4>
                  </div>
                  <div className="subBody">
                    <p>{i.paragraph}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opportunities
