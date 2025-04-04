import React from "react";
import "../styles/home.css";
import PricingPlans from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <div className="home_body">
      <PricingPlans />
      <Testimonials />
    </div>
  );
};

export default Homepage;
