import React from "react";
import Navbar from "../home/components/Navbar";  // ✅ CORRECT
import PricingSection from "./components/PricingSection";
import ImageCard from "./components/ImageCard";
import PricingServices from "./components/PricingServices";
import AppointmentForm from "../home/components/AppointmentForm";
import Footer from "../home/components/Footer";




export default function Pricing() {
  return (
    <div>
      <Navbar />
      <PricingSection />
      <ImageCard />
      <PricingServices />
      <AppointmentForm />
      <Footer />
     
    </div>
  );
}
