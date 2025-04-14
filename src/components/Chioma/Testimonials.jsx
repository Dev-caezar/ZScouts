import React from 'react'
import "../Chioma/testimonials.css";

const Testimonials = () => {
    const data =[
        {
            img: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744639061/vj44v6umqbmzsswhbcdz.jpg",
            player: "David O.",
            role: "player",
            testimony: "ZScouts changed my career! I uploaded my profile, and within weeks, I connected with scouts who saw my potential. Now, I'm playing at a level I once only dreamed of."
        },
        {
            img: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744639063/a67ilscbfyblg1q0a3w1.jpg",
            player: "Musa Ibrahim",
            role: "player",
            testimony: "Finding talented players used to be difficult. Now, I can easily review complete profiles and game footage in one place. It's a game-changer."
        },
        {
            img: "https://res.cloudinary.com/dmpxlspl8/image/upload/v1744640519/ult0h0sxlzdcpdgpqtyr.jpg",
            player: "Chuka Eze",
            role: "player",
            testimony: "This platform gave me the exposure I needed. After uploading my videos and completing my profile, I was contacted by scouts from two international academies!"
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
                                <img src={i?.img} alt="image" />
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
