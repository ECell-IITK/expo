import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Opening Ceremony",
      date: "Day 1",
      time: "9:00 AM",
      description:
        "Inaugural address by distinguished guests and keynote speakers",
    },
    {
      id: 2,
      title: "Startup Pitches",
      date: "Day 1",
      time: "11:00 AM",
      description: "Watch innovative startups pitch their ideas to investors",
    },
    {
      id: 3,
      title: "Panel Discussion",
      date: "Day 2",
      time: "2:00 PM",
      description: "Industry leaders discuss the future of entrepreneurship",
    },
    {
      id: 4,
      title: "Networking Session",
      date: "Day 2",
      time: "4:00 PM",
      description: "Connect with investors, mentors, and fellow entrepreneurs",
    },
    {
      id: 5,
      title: "Workshop: Fundraising",
      date: "Day 3",
      time: "10:00 AM",
      description: "Learn the art of raising capital for your startup",
    },
    {
      id: 6,
      title: "Awards Ceremony",
      date: "Day 3",
      time: "6:00 PM",
      description: "Celebrating the most innovative startups of the expo",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eventsRef = useRef(null);

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

      // Events animation
      gsap.from(eventsRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="events" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Event Schedule
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events and sessions throughout the expo
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div ref={eventsRef} className="space-y-4 sm:space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-gradient-to-r from-primary-50 to-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 border-l-4 border-primary-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <span className="text-primary-600 font-bold text-base sm:text-lg">
                        #{index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-4 md:mt-0 md:ml-4 px-5 py-2 sm:px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm sm:text-base w-full md:w-auto">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
