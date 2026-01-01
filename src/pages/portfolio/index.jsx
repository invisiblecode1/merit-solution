import React from "react";
import Navbar from "../home/components/Navbar";
import PortfolioSlider from "./components/PortfolioSlider";
import HeroBlock from "./components/HeroBlock";
import AppointmentForm from "../home/components/AppointmentForm";
import Testimonials from "./components/Testimonials";
import Footer from "../home/components/Footer";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <PortfolioSlider />
      <HeroBlock />
      <AppointmentForm />
       <Testimonials />
      <Footer />
    </div>
  );
}
