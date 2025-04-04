import React from "react";
import "../styles/pricingplan.css";
import { RiCheckboxCircleFill } from "react-icons/ri";

const PricingPlans = () => {
  return (
    <div className="pricing-container">
      <div className="pricing_wrapper">
        <div className="pricing_text">
          <h4>pricing</h4>
          <h2>Find the plan that fits your goals.</h2>
        </div>
        <div className="pricing_cards_holder">
          <div className="pricing_card">
            <div className="pricing_card_wrapper">
                <div className="card_top">
                  <h4>Free</h4>
                  <p>₦0</p>
                </div>
                <div className="card_center">
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Create a player profile</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Video Uploads</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Standard visibility</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Display resume/CV</p>
                  </div>
                </div>
                <div className="card_footer">
                  <button className="get_started_btn">Get Started for Free</button>
                </div>
              <div className="price_tag">
                <p className="players_tag">Players</p>
              </div>
            </div>
          </div>
          <div className="pricing_card2">
            <div className="pricing_card_wrapper">
                <div className="card_top">
                  <h4>Free</h4>
                  <p>₦0</p>
                </div>
                <div className="card_center">
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Create a player profile</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Video Uploads</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Standard visibility</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Display resume/CV</p>
                  </div>
                </div>
                <div className="card_footer">
                  <button className="get_started_btn2">Get Started for Free</button>
                </div>
              <div className="price_tag2">
                <p className="players_tag">Players</p>
              </div>
            </div>
          </div>
          <div className="pricing_card">
            <div className="pricing_card_wrapper">
                <div className="card_top">
                  <h4>Free</h4>
                  <p>₦0</p>
                </div>
                <div className="card_center">
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Create a player profile</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Video Uploads</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Standard visibility</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Display resume/CV</p>
                  </div>
                </div>
                <div className="card_footer">
                  <button className="get_started_btn">Get Started for Free</button>
                </div>
              <div className="price_tag">
                <p className="players_tag">Players</p>
              </div>
            </div>
          </div>
          <div className="pricing_card2">
            <div className="pricing_card_wrapper">
                <div className="card_top">
                  <h4>Free</h4>
                  <p>₦0</p>
                </div>
                <div className="card_center">
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Create a player profile</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Video Uploads</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Standard visibility</p>
                  </div>
                  <div className="check">
                    <RiCheckboxCircleFill />
                    <p>Display resume/CV</p>
                  </div>
                </div>
                <div className="card_footer">
                  <button className="get_started_btn2">Get Started for Free</button>
                </div>
              <div className="price_tag2">
                <p className="players_tag">Players</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
