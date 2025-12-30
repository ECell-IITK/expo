import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StallSlabs = () => {
  const platinumFeatures = [
    "3 X 3 M SIZE STALLS",
    "1 LED DIPLAY",
    "1 TABLE",
    "2 CHAIR",
    "LIGHT",
    "ELECTRICITY SOCKET",
    "DUSTBIN",
    "1 PEOPLE STAY (3DAYS, 2NIGHTS)",
    "FASCIA (WITH NAME OF STARTUP)",
    "MEDIA COVERAGE",
    "NETWORKING DINNER",
    "PRODUCT LAUNCH/STAGE SHOWCASE",
    "EXCLUSIVE ENTRY TO UPSTART CONFERENCE",
    "BREAKFAST, LUNCH AND DINNER (2 DAYS)",
    "ONE-ON-ONE MENTORING AND FUNDRAISING OPPORTUNITIES",
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const listRef = useRef(null);

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

      // Card animation
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // List items animation
      gsap.from(listRef.current.children, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stall-slabs"
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            STALL SLABS
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div
            ref={cardRef}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-6 sm:mb-8 underline">
              PLATINUM STALL
            </h3>
            <ul ref={listRef} className="space-y-3 sm:space-y-4">
              {platinumFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StallSlabs;

