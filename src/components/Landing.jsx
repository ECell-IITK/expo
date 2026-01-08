import React, { useRef } from "react";
import { Link } from "react-router-dom";
import expoLogo from "../assets/images/expoLogo.svg";
import esummitLogo from "../assets/images/typefaceSVG.svg";
import stallsBg from "../assets/images/expolanding1.png"; //

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={stallsBg}
        alt="Startup Expo Stalls"
        loading="lazy"
        decoding="async"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-105
          filter
          saturate-[0.55]
          contrast-[1.05]
          brightness-[0.75]
        "
      />

      {/* ================= DARK BASE OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#041b1a]/75" />

      {/* ================= THEME GLOW OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0fb9a7]/15 via-transparent to-black/100" />

      {/* ================= SOFT RADIAL HIGHLIGHT ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(72,255,228,0.18),transparent_200%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center">
        {/* ===== LOGOS ===== */}
        <div
          className="
            flex flex-col items-center justify-center
            gap-4 sm:gap-6
            -mt-12 sm:mt-12
          "
        >
          <img
            src={esummitLogo}
            alt="E-Summit 2026"
            loading="lazy"
            decoding="async"
            className="
              h-20 sm:h-30 md:h-32 lg:h-34 2xl:h-44 -mt-4
              object-contain
            "
          />

          <img
            src={expoLogo}
            alt="Startup Expo"
            loading="lazy"
            decoding="async"
            className="
              h-28 sm:h-36 md:h-52 lg:h-58 
              object-contain
              drop-shadow-[0_0_40px_rgba(0,0,0,0.65)]
            "
          />
        </div>

        {/* ===== THEME TEXT ===== */}
        <div className="text-center mt-4">
          <p
            className="
              text-[12px] sm:text-sm md:text-[34px]
              tracking-[0.28em]
              uppercase
              font-semibold
              text-teal-100
            "
          >
            ROOTS TO REALMS
          </p>
        </div>

        {/* ===== REGISTER BUTTON ===== */}
        <div className="mt-8 sm:mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYH0cgh2X3uN7MxD1h8clbWI8p4LszTQgzhwxgIYiQVkjGtw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-8 sm:px-10
              py-3
              rounded-xl
              font-semibold
              text-sm sm:text-base
              bg-gradient-to-b from-[#3bd2c1] to-[#1f8f82]
              shadow-[0_14px_40px_rgba(0,0,0,0.45)]
              hover:from-[#4fe6d5] hover:to-[#2ba99a]
              hover:scale-[1.07]
              active:scale-[0.95]
              transition-all duration-300
            "
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
