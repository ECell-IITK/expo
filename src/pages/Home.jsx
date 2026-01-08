import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const About = lazy(() => import("../components/About"));
const Hero = lazy(() => import("../components/Landing"));
const Gallery = lazy(() => import("../components/Gallery"));
const WhoWillAttend = lazy(() => import("../components/WhoWillAttend"));
const WhyStartupExpo = lazy(() => import("../components/WhyStartupExpo"));
const StallSlabs = lazy(() => import("../components/StallSlabs"));
const Footer = lazy(() => import("../components/Footer"));


function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyStartupExpo />
      <Gallery/>
      <WhoWillAttend />
      <StallSlabs />
      <Footer />
    </div>
  );
}

export default Home;
