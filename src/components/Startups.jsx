import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Startups = () => {
  const startups = [
    {
      id: 1,
      name: "TechInnovate",
      category: "AI/ML",
      description: "Revolutionizing healthcare with AI-powered diagnostics",
      logo: "🤖",
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      category: "CleanTech",
      description: "Sustainable energy solutions for a better tomorrow",
      logo: "🌱",
    },
    {
      id: 3,
      name: "EduTech Pro",
      category: "EdTech",
      description: "Personalized learning platform for students worldwide",
      logo: "📚",
    },
    {
      id: 4,
      name: "FinTech Hub",
      category: "FinTech",
      description: "Next-generation financial services platform",
      logo: "💳",
    },
    {
      id: 5,
      name: "HealthCare Plus",
      category: "HealthTech",
      description: "Telemedicine platform connecting patients with doctors",
      logo: "🏥",
    },
    {
      id: 6,
      name: "AgriTech Solutions",
      category: "AgriTech",
      description: "Smart farming solutions using IoT and data analytics",
      logo: "🚜",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Grid items animation
      gsap.from(gridRef.current.children, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="startups"
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Startups
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative startups that are shaping the future
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4"
        >
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">
                  {startup.logo}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                    {startup.name}
                  </h3>
                  <span className="text-xs sm:text-sm text-primary-600 font-semibold">
                    {startup.category}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {startup.description}
              </p>
              <button className="text-sm sm:text-base text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div
          ref={buttonRef}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4"
        >
          <Link
            to="/explore-startups"
            className="btn-primary text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 inline-block transform hover:scale-105 transition-transform"
          >
            View All Startups
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Startups;
