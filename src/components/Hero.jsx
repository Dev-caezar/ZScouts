import "../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero_body">
      <div className="hero_wrapper">
        <h1>
          Get{" "}
          <span className="animated-text">
            <span className="word">Discovered.</span>
            <span className="word">Talents.</span>
          </span>
          <br />
          Play at the Next Level.
        </h1>
        <h4>Create your profile, showcase your talent, and connect with scouts worldwide.</h4>
        <button className="get_started">Get started now</button>
        <div className="avatar_holder">
          <div className="avatar_container">
            <div class="image-item">
              <img src="/src/assets/Ellipse 2.jpg" alt="Image 1"/>
          </div>
          <div class="image-item">
              <img src="/src/assets/Ellipse 3.jpg" alt="Image 2"/>
          </div>
          <div class="image-item">
              <img src="/src/assets/Ellipse 4.jpg" alt="Image 3"/>
          </div>
          <div class="image-item">
              <img src="/src/assets/Ellipse 5.jpg" alt="Image 4"/>
          </div>
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

