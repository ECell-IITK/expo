import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      // Buttons animation
      gsap.from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Stats animation with scroll trigger
      const statsChildren = statsRef.current ? Array.from(statsRef.current.children) : [];

      gsap.from(statsChildren, {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Floating animation for stats
      statsChildren.forEach((stat, index) => {
        gsap.to(stat, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="section-padding pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="block">IIT Kanpur</span>
            <span className="block text-primary-200">Startup Expo</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-primary-100 leading-relaxed px-2"
          >
            Showcasing Innovation, Entrepreneurship, and the Future of
            Technology
          </p>
          <p
            ref={descriptionRef}
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-primary-200 max-w-2xl mx-auto px-2"
          >
            Join us for an exciting journey into the world of startups, where
            brilliant minds meet groundbreaking ideas
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link
              to="/explore-startups"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 text-center transform hover:scale-105 transition-transform"
            >
              Explore Startups
            </Link>
            <Link
              to="/register"
              className="btn-primary bg-primary-500 hover:bg-primary-400 text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 text-center transform hover:scale-105 transition-transform"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              50+
            </div>
            <div className="text-primary-200 text-xs sm:text-sm md:text-base">
              Startups
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              1000+
            </div>
            <div className="text-primary-200 text-xs sm:text-sm md:text-base">
              Attendees
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              20+
            </div>
            <div className="text-primary-200 text-xs sm:text-sm md:text-base">
              Speakers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
              3
            </div>
            <div className="text-primary-200 text-xs sm:text-sm md:text-base">
              Days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
