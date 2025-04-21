import React from "react";
import "../Chioma/pricingplan.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const navigate = useNavigate

  const pricingData = [
    {
      plan: "Free",
      price: "₦0",
      features: [
        "Create a player profile",
        "Video Uploads",
        "Standard visibility",
        "Display resume/CV",
      ],
      btnClass: "get_started_btn",
      tagClass: "price_tag",
      tag: "Players",
      cardClass: "pricing_card",
    },
    {
      plan: "Free",
      price: "₦0",
      features: [
        "Create a player profile",
        "Search for players",
        "Access to player profiles",
      ],
      btnClass: "get_started_btn2",
      tagClass: "price_tag2",
      tag: "Scouts",
      cardClass: "pricing_card2",
    },
    {
      plan: "Premium",
      price: "₦3000",
      features: [
        "Create a player profile",
        "Video Uploads",
        "Standard visibility",
        "Display resume/CV",
        "Priority visibility (featured in searches)",
      ],
      btnClass: "get_started_btn",
      tagClass: "price_tag",
      tag: "Players",
      cardClass: "pricing_card",
    },
    {
      plan: "Premium",
      price: "₦15000",
      features: [
        "Create a Scout profile",
        "Search for players",
        "Access to player profiles",
        "Access to player Contact info"
      ],
      btnClass: "get_started_btn2",
      tagClass: "price_tag2",
      tag: "Scouts",
      cardClass: "pricing_card2",
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing_wrapper">
        <div className="pricing_text">
          <h4>pricing</h4>
          <h2>Find the plan that fits your goals.</h2>
        </div>
        <div className="pricing_cards_holder">
          {pricingData.map((item, index) => (
            <div key={index} className={item.cardClass}>
              <div className="pricing_card_wrapper">
                <div className="card_top">
                  <h4>{item.plan}</h4>
                  <p>{item.price}</p>
                </div>
                <div className="card_center">
                  {item.features.map((feature, idx) => (
                    <div className="check" key={idx}>
                      <RiCheckboxCircleFill className="check_icon"/>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="card_footer">
                  <button className={item.btnClass} 
                   onClick={() => navigate("/signup_option")}
                    >
                     Get Started for Free
                  </button>
                </div>
                <div className={item.tagClass}>
                  <p className="players_tag">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
