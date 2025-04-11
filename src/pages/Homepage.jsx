import React from "react";
import "../styles/home.css";
import Hero from "../components/Hero";
import WhyZScouts from "../components/Chiemerie/WhyZScouts";
import Opportunities from "../components/Chiemerie/Opportunities";
import Nextlevel from "../components/Chiemerie/Nextlevel";
import PricingPlans from "../components/Chioma/PricingPlans";
import Testimonials from "../components/Chioma/Testimonials";

const Homepage = () => {
  return (
    <div className="home_body">
      <Hero />
      <WhyZScouts />
      <Opportunities />
      <Nextlevel />
      <PricingPlans />
      <Testimonials />
      <Nextlevel />
    </div>
  );
};

export default Homepage;
