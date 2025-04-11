import React from 'react'
import "../../styles/about.css"
import { useNavigate } from 'react-router'

const AboutUs = () => {

  const nav = useNavigate()

  const Data = [
    {
      image: "/src/assets/public/michaelimage.png",
      name: "Michael Onyekachi",
      stack: "Product Designer / TeamLead",
    },
    {
      image: "/src/assets/public/chiomaimage.png",
      name: "Ozofor Chioma",
      stack: "Frontend Developer",
    },
    {
      image: "/src/assets/public/etijoroimage.png",
      name: "Etijoro Emmanuel",
      stack: "Backend Developer",
    },
    {
      image: "/src/assets/public/christianimage.png",
      name: "Oko Christian",
      stack: "Frontend Developer",
    },
    {
      image: "/src/assets/public/chiemerieimage.png",
      name: "Chiemerie",
      stack: "Frontend Developer",
    },
    {
      image: "/src/assets/public/daniellaimage.png",
      name: "Sodade Daniella",
      stack: "Backend Developer",
    },
    {
      image: "/src/assets/public/amadiimage.png",
      name: "Amadi Emmanuel",
      stack: "Backend Developer",
    },
    {
      image: "/src/assets/public/wisdomimage.png",
      name: "Osuji Wisdom",
      stack: "Frontend Developer",
    },
  ]


  return (
    <div className='about-us-main'>
    <div className='about-us-hero' >
      <div className='about-us-hero-inner' >
        <div className='about-us-hero-inner-top'>
         <h1>About us</h1>
        </div>
        <div className='about-us-hero-inner-bottom'>
          <p>Bridging the Gap Between Talents and Opportunity.</p>
        </div>
      </div>
    </div>
    <div className='About-us-second-layer'>
      <div className='about-us-second-layer-wrap'>
        <div className='about-us-all-image'>
          <div className='about-us-logo-div'>
            <div className='about-us-logo-main'>
              <img src="/src/assets/public/aboutuslogo.png" alt="" />
            </div>
          </div>
          <div className='about-us-all-image-div'>
            <img src="/src/assets/public/aboutustogetherimage.png" alt="" />
          </div>
        </div>
        <div className='about-us-text'>
          <div className='who-we-are'><h4>Who We Are</h4></div>
          <div className='connecting-talent-with-opportunity'>
            <h1>Connecting talents with opportunity</h1>
          </div>
          <div className='who-we-are-main-text'><p>At Zscouts, we are redefining the way football talent is discovered. Our platform bridges the gap between aspiring players and professional scouts, making the recruitment process seamless and efficient. For players, Zscouts provides a stage to showcase skills, connect with scouts, and unlock career-changing opportunities. For scouts, we offer a platform to discover, evaluate, and recruit the best talents in Nigeria.</p></div>
        </div>
      </div>
    </div>
    <div className='our-mission-our-vision'>
      <div className='our-mission-our-vision-wrap'>
        <div className='our-mission-our-vision-wrap-box-1'>
          <div className='our-mission-our-vision-top'><h4>Our Mission</h4></div>
          <div className='our-mission-our-vision-middle'> <h1>Connections for players & scouts</h1></div>
          <div className='our-mission-our-vision-bottom'>
            <p>At Zscouts, our mission is to bridge the gap between aspiring footballers and professional scouts by providing a seamless, platform for talents discovery. We empower players with the tools to showcase their skills and help scouts make informed recruitment decisions effortlessly.</p>
          </div>
        </div>
        <div className='our-mission-our-vision-wrap-box-2'>
        <div className='our-mission-our-vision-top'><h4>Our Vision</h4></div>
        <div className='our-mission-our-vision-middle'> <h1>Shaping the future of talents discoveries in sports.</h1></div>
        <div className='our-mission-our-vision-bottom'>
          <p>Our vision is to revolutionize football scouting worldwide by making talents discovery more accessible, transparent, and efficient. We aim to become the go-to platform where the next generation of football stars and recruiters connect, transforming dreams into reality.</p>
        </div>
        </div>
      </div>
    </div>
    <div className='about-us-third-layer'>
      <div className='about-us-third-layer-wrap'>
        <div className='about-us-third-layer-wrap-inner'>
          <div className='about-us-third-layer-wrap-inner-top'>
            <h1>Discover Talents.Build</h1>
            <h1>the Future.</h1>
          </div>
          <div className='about-us-third-layer-wrap-inner-bottom'>
            <div className='about-us-third-layer-wrap-inner-bottom-text'>
              <p>Find and connect with top players ready to</p>
              <p>make an impact.</p>
            </div>
            <div className='about-us-third-layer-wrap-inner-bottom-button'>
              <button onClick={()=>nav("/signup_option")} className='start-scouting-btn'>Start Scouting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='Zscout-Team'>
      <div className='Zscout-Team-wrap'>
        <div className='Zscout-Team-wrap-top'><h4>Zscout Team</h4></div>
        <div className='Zscout-Team-wrap-bottom'><h1>Experts connecting talents to scouts.</h1></div>
      </div>
    </div>
    <div className='Zscout-Team-main' >
      <div className='Zscout-Team-main-wrap'>
        {
          Data.map((item)=> (
            <div className='one-person-image'>
              <div className='one-person-image-div-main'>
                <img src={item.image} alt="img" />
              </div>
              <div className='one-person-text-div-main'>
                <div className='developer-name'>{item.name}</div>
                <div className='developer-stack'>{item.stack}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className='about-us-pricing-div'></div>
    <div className='discover-talents-build-the-future'>
    <div className="nextLevel">
        <div className="nextLevelImage"> 
          <div className="nextLevelText1">
            <h1>Take Your Career to</h1>
            <h1>the Next Level!</h1>
            <p>Create your profile, upload your higlights, and</p>
            <p>attract scouts looking for talent like you.</p>
          </div>
          <button  onClick={()=>nav("/signup_option")} style={{cursor: "pointer"}} className="nextLevelText2"> Create Your Free Profile</button>
        </div>
       </div>
    </div>
    <div className='aboutus-testimonial-card'></div>
    
    </div>
  )
}

export default AboutUs