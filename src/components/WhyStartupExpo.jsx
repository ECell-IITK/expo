import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyStartupExpo = () => {
  const features = [
    {
      id: 1,
      title: "Stalls For Showcase",
      description:
        "Startups will be provided stalls along with the necessary provisions (special provisions can be provided) to showcase their cutting edge technologies. The stalls will be located at prime locations with the visibility of more that 15k+ people.",
    },
    {
      id: 2,
      title: "Product Launch/ stage showcase",
      description:
        "Companies will be provided with an opportunity to launch their product in front of a diverse community attending E-Summit consisting of top investors, VC's, Corporate Leaders and esteemed faculty (Details can be found below).",
    },
    {
      id: 3,
      title: "Pitching opportunities",
      description:
        "Along with the flow of Startup Expo pitching events and other buzz events will be organized where startups would have an opportunity to pitch in front of a panel composed of Venture capitalists and other dignitaries, to secure a chance of funding and mentoring opportunity.",
    },
    {
      id: 4,
      title: "ONE ON ONE MENTORING AND OPPORTUNITIES",
      description:
        "Mentoring stations will be set up at the Expo where startups can secure a chance of having one on one mentoring/networking with the top dignitaries and corporate leaders at E-Summit'22.",
    },
    {
      id: 5,
      title: "Validation from E-Summit Dignitaries",
      description:
        "E-Summit has hosted some of the renowned personalities in the world including the likes of Late Dr. A. P. J. Abdul Kalam (Former President of India), Michael Siebel (CEO, Y Combinator), Kunal Shah (Founder, CRED) among many others.",
    },
    {
      id: 6,
      title: "IIT Kanpur Incubators",
      description:
        "IIT Kanpur is the home to not one but two of India's finest incubators; SIDBI Innovation and Incubation Centre (SIIC), C3iHub IIT Kanpur.",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-startup-expo"
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            WHY STARTUP EXPO
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-6 border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStartupExpo;

