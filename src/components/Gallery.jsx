"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import g1 from "../assets/images/g.jpeg";
import g2 from "../assets/images/g (1).jpeg";
import g3 from "../assets/images/g (2).jpeg";
import g4 from "../assets/images/g (3).jpeg";
import g5 from "../assets/images/g (4).jpeg";
import g6 from "../assets/images/g (5).jpeg";

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  const gridRef = useRef(null);
  const [items, setItems] = useState(images);

  /* ===== Shuffle Function ===== */
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  /* ===== Auto Shuffle Animation ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        scale: 0.96,
        duration: 0.4,
        stagger: 0.03,
        onComplete: () => {
          setItems((prev) => shuffleArray(prev));
          gsap.to(gridRef.current.children, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out",
          });
        },
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 backdrop-blur-md">
      <div className="max-w-5xl mx-auto">
        
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent">
            PAST YEAR HIGHLIGHTS
          </h2>
          <div className="w-24 h-1 bg-[#46f9e4] mx-auto mt-4" />
        </div>

        {/* ===== IMAGE GRID ===== */}
        <div
          ref={gridRef}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-4
            md:gap-4
          "
        >
          {items.map((img, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border border-white/10
                bg-black/30
                shadow-[0_0_50px_rgba(36,190,176,0.25)]
              "
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  aspect-square
                  transition-all
                  duration-500
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Glow Overlay */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-tr
                  from-[#46f9e4]/20
                  via-transparent
                  to-transparent
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
