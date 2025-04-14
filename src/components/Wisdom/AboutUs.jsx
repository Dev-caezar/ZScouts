import React from 'react'
import "../../styles/about.css"
import { useNavigate } from 'react-router'
import Nextlevel from '../Chiemerie/Nextlevel'
import PricingPlans from '../Chioma/PricingPlans'
import Testimonials from '../Chioma/Testimonials'

import aboutuslogoimage from "../../assets/aboutuslogo.png"
import together from "../../assets/aboutustogetherimage.png"

const AboutUs = () => {

  const nav = useNavigate()

  const Data = [
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638057/jwwci5ttuvu3d4sawgdn.jpg",
      name: "Michael Onyekachi",
      stack: "Product Designer / TeamLead",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638060/mn8kwccw4vhbrgkgxll2.jpg",
      name: "Ozofor Chioma",
      stack: "Frontend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638062/tloa562nis3mavnakbfe.jpg",
      name: "Etijoro Emmanuel",
      stack: "Backend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638064/aehqrf8krldfgh2ynqcm.jpg",
      name: "Oko Christian",
      stack: "Frontend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638066/g8iqi9nfd3tof5gbtkcl.jpg",
      name: "Chiemerie",
      stack: "Frontend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638069/wn9zmlyz0c3ivamcdqoz.jpg",
      name: "Sodade Daniella",
      stack: "Backend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638070/h1rmlkonfp4xn23nwyjn.jpg",
      name: "Amadi Emmanuel",
      stack: "Backend Developer",
    },
    {
      image: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744638072/wj2osvlhohu4gpz0g5fd.jpg",
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
              <img src={aboutuslogoimage} alt="" />
            </div>
          </div>
          <div className='about-us-all-image-div'>
            <img src={together} alt="" />
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
    <div className='about-us-pricing-div'>
       <PricingPlans />
       <Nextlevel />
    </div>
    <div className='aboutus-testimonial-card'>
      <Testimonials />
    </div>
    </div>
  )
    }

export default AboutUs