import React from 'react'
import '../styles/testimonial.css'

const Testimonials = () => {
    const data =[
        {
            img: "/src/assets/Ellipse 6.jpg",
            player: "David O., Midfielder",
            role: "player",
            testimony: "ZScouts changed my career! I uploaded my profile, and within weeks, I connected with scouts who saw my potential. Now, I'm playing at a level I once only dreamed of!"
        },
        {
            img: "/src/assets/Ellipse 6.jpg",
            player: "David O., Midfielder",
            role: "player",
            testimony: "ZScouts changed my career! I uploaded my profile, and within weeks, I connected with scouts who saw my potential. Now, I'm playing at a level I once only dreamed of!"
        },
        {
            img: "/src/assets/Ellipse 6.jpg",
            player: "David O., Midfielder",
            role: "player",
            testimony: "ZScouts changed my career! I uploaded my profile, and within weeks, I connected with scouts who saw my potential. Now, I'm playing at a level I once only dreamed of!"
        }
    ]
  return (
    <div className='testimonial-wrapper'>
        <div className='testimonial_container'>
            <div className='testimonial_text'>
                <h4>Testimonials</h4>
                <h2>Real Stories, Real Success.</h2>
            </div>
            <div className="testimony_container">
                {
                    data.map((i,index)=>(
                        <div className="testimony_card" key={index}>
                            <div className="img_holder">
                                <img src={i.img} alt="" />
                            </div>
                            <h2>{i.player}</h2>
                            <p>{i.role}</p>
                            <h4>"{i.testimony}"</h4>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Testimonials
