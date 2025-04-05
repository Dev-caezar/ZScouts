import React from "react";
import "../styles/home.css";
import PricingPlans from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <div className="home_body">
      <Hero />
      <PricingPlans />
      <Testimonials />
    </div>
  );
};

export default Homepage;
