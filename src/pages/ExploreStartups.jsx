import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ExploreStartups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI/ML",
    "CleanTech",
    "EdTech",
    "FinTech",
    "HealthTech",
    "AgriTech",
    "E-commerce",
    "SaaS",
  ];

  const startups = [
    {
      id: 1,
      name: "TechInnovate",
      category: "AI/ML",
      description: "Revolutionizing healthcare with AI-powered diagnostics",
      logo: "🤖",
      founded: "2020",
      employees: "50-100",
      funding: "Series A",
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      category: "CleanTech",
      description: "Sustainable energy solutions for a better tomorrow",
      logo: "🌱",
      founded: "2019",
      employees: "20-50",
      funding: "Seed",
    },
    {
      id: 3,
      name: "EduTech Pro",
      category: "EdTech",
      description: "Personalized learning platform for students worldwide",
      logo: "📚",
      founded: "2021",
      employees: "100+",
      funding: "Series B",
    },
    {
      id: 4,
      name: "FinTech Hub",
      category: "FinTech",
      description: "Next-generation financial services platform",
      logo: "💳",
      founded: "2018",
      employees: "50-100",
      funding: "Series A",
    },
    {
      id: 5,
      name: "HealthCare Plus",
      category: "HealthTech",
      description: "Telemedicine platform connecting patients with doctors",
      logo: "🏥",
      founded: "2020",
      employees: "20-50",
      funding: "Seed",
    },
    {
      id: 6,
      name: "AgriTech Solutions",
      category: "AgriTech",
      description: "Smart farming solutions using IoT and data analytics",
      logo: "🚜",
      founded: "2019",
      employees: "10-20",
      funding: "Pre-Seed",
    },
    {
      id: 7,
      name: "ShopSmart",
      category: "E-commerce",
      description: "AI-powered e-commerce platform for personalized shopping",
      logo: "🛒",
      founded: "2021",
      employees: "50-100",
      funding: "Series A",
    },
    {
      id: 8,
      name: "CloudSync",
      category: "SaaS",
      description: "Enterprise cloud management and collaboration tools",
      logo: "☁️",
      founded: "2020",
      employees: "100+",
      funding: "Series B",
    },
    {
      id: 9,
      name: "MedAI",
      category: "AI/ML",
      description: "Advanced medical imaging using machine learning",
      logo: "🔬",
      founded: "2022",
      employees: "20-50",
      funding: "Seed",
    },
    {
      id: 10,
      name: "EcoDrive",
      category: "CleanTech",
      description: "Electric vehicle charging infrastructure network",
      logo: "🔌",
      founded: "2021",
      employees: "50-100",
      funding: "Series A",
    },
    {
      id: 11,
      name: "LearnHub",
      category: "EdTech",
      description: "Online learning marketplace with live classes",
      logo: "🎓",
      founded: "2020",
      employees: "100+",
      funding: "Series B",
    },
    {
      id: 12,
      name: "PaySecure",
      category: "FinTech",
      description: "Blockchain-based secure payment solutions",
      logo: "🔐",
      founded: "2021",
      employees: "20-50",
      funding: "Seed",
    },
  ];

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || startup.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12">
        <div className="container-custom px-4">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore Startups
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative startups that are shaping the future
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 sm:mb-10 space-y-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              Showing{" "}
              <span className="font-semibold">{filteredStartups.length}</span>{" "}
              {filteredStartups.length === 1 ? "startup" : "startups"}
            </p>
          </div>

          {/* Startups Grid */}
          {filteredStartups.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-6 border border-gray-100"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">
                      {startup.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {startup.name}
                      </h3>
                      <span className="inline-block text-xs sm:text-sm text-primary-600 font-semibold bg-primary-50 px-2 py-1 rounded">
                        {startup.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {startup.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs sm:text-sm text-gray-500">
                    <div>
                      <span className="font-semibold">Founded:</span>{" "}
                      {startup.founded}
                    </div>
                    <div>
                      <span className="font-semibold">Team:</span>{" "}
                      {startup.employees}
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold">Funding:</span>{" "}
                      {startup.funding}
                    </div>
                  </div>
                  <button className="w-full btn-primary text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No startups found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreStartups;
