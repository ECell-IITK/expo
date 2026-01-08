import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stallSvg from "../assets/images/expoStall.svg";

gsap.registerPlugin(ScrollTrigger);

const StallSlabs = () => {
  const platinumFeatures = [
    "3 X 3 M SIZE STALLS",
    "1 LED DISPLAY",
    "1 TABLE",
    "2 CHAIR",
    "LIGHT",
    "ELECTRICITY SOCKET",
    "DUSTBIN",
    "1 PEOPLE STAY (3 DAYS, 2 NIGHTS)",
    "FASCIA (WITH NAME OF STARTUP)",
    "MEDIA COVERAGE",
    "NETWORKING DINNER",
    "PRODUCT LAUNCH / STAGE SHOWCASE",
    "EXCLUSIVE ENTRY TO UPSTART CONFERENCE",
    "BREAKFAST, LUNCH AND DINNER (2 DAYS)",
    "ONE-ON-ONE MENTORING AND FUNDRAISING OPPORTUNITIES",
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 75%",
        },
      });

      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 75%",
        },
      });

      gsap.from(listRef.current.children, {
        x: -25,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stall-slabs"
      className="relative py-20 px-4 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 pointer-events-none overlay-stall" />

        {/* ===== Heading ===== */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent">
            STALL SLABS
          </h2>
          <div className="w-24 h-1 bg-[#46f9e4] mx-auto mt-4" />
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT : PLATINUM CARD (mobile last) ===== */}
          <div
            ref={leftRef}
            className="
              order-3 lg:order-1
              lg:ml-24 xl:ml-32 2xl:ml-40
            "
          >
            <div
              className="
                relative
                rounded-2xl
                p-8 sm:p-10
                bg-gradient-to-b
                from-[#27c6ae]
                via-[#0f7f73]
                to-[#052b26]
                shadow-[0_25px_80px_rgba(31,224,195,0.35)]
              "
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                PLATINUM STALL
              </h3>

              <div className="w-full h-px bg-white/25 mb-6" />

              <ul ref={listRef} className="space-y-4">
                {platinumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#b8fff5] mt-1 flex-shrink-0"
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
                    <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== RIGHT : IMAGE + TEXT ===== */}
          <div
            ref={rightRef}
            className="
              order-1 lg:order-2
              flex flex-col
              items-center lg:items-end
              gap-10
              lg:pr-10 xl:pr-20
            "
          >
            {/* Image (mobile first) */}
            <img
              src={stallSvg}
              alt="Startup Expo Stall"
              loading="lazy"
              decoding="async"
              className="
                w-[260px]
                sm:w-[300px]
                md:w-[340px]
                lg:w-[380px]
                xl:w-[600px]
                2xl:w-[650px]
                drop-shadow-[0_0_80px_rgba(70,249,228,0.4)]
              "
            />

            {/* Paragraph */}
            <p
              className="
                max-w-xl
                text-sm sm:text-base md:text-lg
                text-teal-50/90
                leading-relaxed
                text-justify
              "
            >
              Platinum Stall is designed for startups seeking maximum visibility
              and high-impact engagement at the Startup Expo. Positioned at
              prime locations, these stalls offer a comprehensive setup with
              premium amenities, brand fascia, and exclusive access to
              networking, media coverage, and mentoring opportunities. Ideal
              for product showcases and launches, the Platinum Stall ensures a
              strong presence among investors, industry leaders, and a diverse
              audience throughout the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StallSlabs;
