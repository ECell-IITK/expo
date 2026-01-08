import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/LogoComplete.png";
import expo from "../assets/images/expoLogo.svg";

const ESUMMIT_WEBSITE = "https://www.ecelliitk.org/esummit/"; // change if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full max-w-9xl z-50 transition-all duration-300
        ${
           scrolled
             ? "bg-[#0b2f2b]/75 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.4)]"
              : "bg-[#0b2f2b]/90"
         }
  `}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3 md:py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* E-Summit Logo */}
          <a
            href="https://www.ecelliitk.org/esummit/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              src={Logo}
              loading="lazy"
              decoding="async"
              alt="E-Summit Logo"
              className="h-10 w-39.8 object-cover"
            />
          </a>

          {/* Startup Expo Logo */}
          <a
            href="https://www.ecelliitk.org/expo/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              src={expo}
              loading="lazy"
              decoding="async"
              alt="Startup Expo Logo"
              className="h-10 w-39.2 object-cover"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {isHomePage ? (
            <>
              <a
                href="#home"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                About
              </a>
              <a
                href="#why-startup-expo"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                Why StartupExpo
              </a>
              <a
                href="#stall-slabs"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                Stall Slabs
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                Home
              </Link>
              <Link
                to="/explore-startups"
                className="text-white hover:text-primary-600 transition-colors text-sm xl:text-base"
              >
                Explore Startups
              </Link>
            </>
          )}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYH0cgh2X3uN7MxD1h8clbWI8p4LszTQgzhwxgIYiQVkjGtw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-1.5
              rounded-md
              font-semibold text-sm text-white
              bg-gradient-to-b from-[#3bd2c1] to-[#1f8f82]
              shadow-[0_4px_10px_rgba(0,0,0,0.4)]
              hover:from-[#4fe6d5] hover:to-[#2ba99a]
              transition-all duration-300
              hover:scale-[1.08] active:scale-[0.97]
            "
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden pb-4 space-y-3 pt-2 bg-black/90 backdrop-blur-md">
          {isHomePage ? (
            <>
              <a
                href="#home"
                className="block text-white hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-white hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="block text-white hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/explore-startups"
                className="block text-white hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Explore Startups
              </Link>
            </>
          )}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYH0cgh2X3uN7MxD1h8clbWI8p4LszTQgzhwxgIYiQVkjGtw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full block text-center"
            onClick={() => setIsOpen(false)}
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
