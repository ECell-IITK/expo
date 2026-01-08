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
    <section ref={sectionRef} id="about" className="section-padding backdrop-blur-md ">
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent mb-3 sm:mb-4"
          >
            ABOUT
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#46f9e4] mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          <div ref={contentRef}>
            <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 leading-relaxed text-justify">
              Startup Expo is a premier exhibition that brings together
              visionary startups, investors, and organizations from across India
              under one roof. The event serves as a dynamic platform for
              emerging ventures to showcase their innovative products,
              cutting-edge technologies, and disruptive ideas to a diverse
              audience. By fostering meaningful interactions and collaborations,
              Startup Expo bridges the gap between innovation and opportunity,
              enabling startups to gain visibility, insights, and connections
              essential for scaling their impact.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 leading-relaxed text-justify">
              With an ecosystem-driven approach, the Expo encourages networking,
              learning, and growth by connecting startups with mentors,
              investors, and like-minded innovators. It aims to spark
              conversations that lead to partnerships, investments, and
              long-term success within the entrepreneurial community.
            </p>
          </div>
          <div ref={cardRef} className="relative mt-8 md:mt-0">
            <div className="bg-gradient-to-br bg-[#11b19e] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                {/* VIDEO WRAPPER */}
                <div className="aspect-video rounded-lg overflow-hidden shadow-inner">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Hm8D5n3GFlQ"
                    title="Startup Expo Glimpses"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
