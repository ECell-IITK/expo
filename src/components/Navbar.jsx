import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">E</span>
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold text-gray-900">
                IIT Kanpur E-Cell
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Startup Expo
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {isHomePage ? (
              <>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  About
                </a>
                <a
                  href="#why-startup-expo"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Why Startup Expo
                </a>
                <a
                  href="#startups"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Startups
                </a>
                <a
                  href="#events"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Events
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Home
                </Link>
                <Link
                  to="/explore-startups"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
                >
                  Explore Startups
                </Link>
              </>
            )}
            <Link
              to="/signin"
              className="text-gray-700 hover:text-primary-600 transition-colors text-sm xl:text-base"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn-primary text-sm px-4 py-2 xl:px-6 xl:py-3"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-2"
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
          <div className="lg:hidden pb-4 space-y-3 pt-2">
            {isHomePage ? (
              <>
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#why-startup-expo"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Why Startup Expo
                </a>
                <a
                  href="#startups"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Startups
                </a>
                <a
                  href="#events"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </a>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/explore-startups"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Startups
                </Link>
              </>
            )}
            <Link
              to="/signin"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn-primary w-full block text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
