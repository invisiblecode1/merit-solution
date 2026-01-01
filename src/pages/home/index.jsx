import React from "react";
import Navbar from "./components/Navbar";
import Header30 from "./components/Header30";
import Services from "./components/services";
import FeaturesCarousel from "./components/FeaturesCarousel";
import StepsToGetStarted from './components/StepsToGetStarted';
import WorkflowTimeline from './components/WorkflowTimeline';
import WhyChooseUs from './components/WhyChooseUs';
import ImageCard from './components/ImageCard';
import PortfolioSlider from './components/PortfolioSlider';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header30 />
      <Services />
      <FeaturesCarousel />
      <StepsToGetStarted />
      <WorkflowTimeline />
      <WhyChooseUs />
      <ImageCard />
      <PortfolioSlider />
      <AppointmentForm />
      <Footer />
    </div>
  );
}
