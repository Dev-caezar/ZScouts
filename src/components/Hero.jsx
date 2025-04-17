import "../styles/hero.css";
import position from "../assets/heroImg.png"
import { useNavigate } from "react-router"

const Hero = () => {
  const nav = useNavigate()
  const handleGetStarted =()=>{
    nav("/signup_option")
  }
  return (
    <div className="hero_body">
      <div className="hero_wrapper">
        <h1>
          Get{" "}
          <span className="animated-text">
            <span className="word">Discovered.</span>
            <span className="word">Talents.</span>
          </span>
          </h1>
        <h1>
          Play at the Next Level.
        </h1>
        <h4>Create your profile, showcase your talent, and connect with scouts worldwide.</h4>
        <button className="get_started" onClick={handleGetStarted}>Get started now</button>
        <div className="avatar_holder">
          <div className="avatar_container">
            <img src={position} alt="" />
          </div>
        <div className="trust_card">
          <h4>500+ Satisfied Players Trust Us</h4>
          <h4>500+ Satisfied Scouts Trust Us</h4>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Hero

