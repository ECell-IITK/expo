import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWillAttend = () => {
  const attendees = [
    "IIT Kanpur diverse student community including UG, PG and PhD scholars",
    "IIT Kanpur Board of Deans and Professors",
    "Top bureaucrats from Central and State Government",
    "Distinguished faculty members of IIT Kanpur",
    "Director and members of SIIC, TechnoPark and C3i Hub (Incubators at IIT Kanpur)",
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      gsap.from(listRef.current.children, {
        x: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="who-will-attend" className="py-3 sm:py-1 backdrop-blur-md">
      <div className="container-custom px-4">
        {/* ===== HEADING ===== */}
        <div ref={headingRef} className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent mb-3 sm:mb-4">
            {" "}
            WHO WILL ATTEND ?{" "}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#46f9e4] to-[#2dd4bf] mx-auto mt-3" />
        </div>

        {/* ===== INFO BOX ===== */}
        <div
          className="
            max-w-4xl mx-auto
            rounded-2xl
            p-5 sm:p-6
            bg-gradient-to-br
            from-[#0b2f2b]
            via-[#0f3f39]
            to-[#06201d]
            border border-[#3fffe2]/30
            shadow-[0_0_40px_rgba(63,255,226,0.18)]
            transition-all duration-300
            hover:brightness-110
            hover:-translate-y-1
            hover:shadow-[0_0_65px_rgba(63,255,226,0.35)]
          "
        >
          <ul ref={listRef} className="space-y-3 sm:space-y-4">
            {attendees.map((attendee, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Accent dot */}
                <span className="mt-[9px] h-2.5 w-2.5 rounded-full bg-[#46f9e4]  flex-shrink-0" />

                <p className="text-sm sm:text-base text-teal-50 leading-relaxed">
                  {attendee}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWillAttend;
