import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const cardRef = useRef(null);

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

      // Content animation
      gsap.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Card animation
      gsap.from(cardRef.current, {
        x: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            ABOUT STARTUP EXPO
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          <div ref={contentRef}>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              StartupExpo is a startups exhibition event, welcoming all the
              top-notch Startups, Investors, Speakers, Organizations and
              attendees from all over India. The event will provide an amazing
              platform for startups to showcase their innovative products with
              the rest of the people thereby connecting them to an amazing
              community to help propel their growth.
            </p>
          </div>
          <div ref={cardRef} className="relative mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Video Highlights
                </h4>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm">
                    Video Placeholder - E-SUMMIT Glimpses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
