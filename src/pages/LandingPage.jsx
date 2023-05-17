import React from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeaderBoard from "../components/LeaderBoard";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LeaderBoard />
      <Testimonial />
      <Footer />
    </div>
  );
}
