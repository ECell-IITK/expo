import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyStartupExpo from "../components/WhyStartupExpo";
import WhoWillAttend from "../components/WhoWillAttend";
import StallSlabs from "../components/StallSlabs";
import Startups from "../components/Startups";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyStartupExpo />
      <WhoWillAttend />
      <StallSlabs />
      <Startups />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
