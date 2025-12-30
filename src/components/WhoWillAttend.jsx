import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWillAttend = () => {
  const attendees = [
    "IIT Kanpur diverse student community which includes UG's, PG's, PhD",
    "IIT Kanpur Board of Deans and Proffesors",
    "Top Bureaucrats of Central and State Government",
    "IIT Kanpur distinguished faculty members",
    "Director and members of SIIC and C3i Hub (Incubators at IIT Kanpur)",
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
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

      // List items animation
      gsap.from(listRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
      id="who-will-attend"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            WHO WILL ATTEND
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <ul ref={listRef} className="space-y-4 sm:space-y-6">
            {attendees.map((attendee, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
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

