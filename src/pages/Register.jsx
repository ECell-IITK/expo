import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    registrationType: "attendee",
    interests: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const registrationTypes = [
    { value: "attendee", label: "Attendee" },
    { value: "startup", label: "Startup Representative" },
    { value: "investor", label: "Investor" },
    { value: "speaker", label: "Speaker" },
    { value: "sponsor", label: "Sponsor" },
  ];

  const interests = [
    "AI/ML",
    "CleanTech",
    "EdTech",
    "FinTech",
    "HealthTech",
    "AgriTech",
    "E-commerce",
    "SaaS",
    "Networking",
    "Investment Opportunities",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission
    console.log("Registration data:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        registrationType: "attendee",
        interests: [],
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12">
          <div className="container-custom px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Registration Successful!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Thank you for registering. We've sent a confirmation email to{" "}
                  <span className="font-semibold">{formData.email}</span>
                </p>
                <Link to="/" className="btn-primary inline-block">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Register for Startup Expo
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Join us for an exciting journey into the world of startups
              </p>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Registration Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Registration Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {registrationTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                          formData.registrationType === type.value
                            ? "border-primary-600 bg-primary-50 text-primary-600"
                            : "border-gray-300 hover:border-primary-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="registrationType"
                          value={type.value}
                          checked={formData.registrationType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-xs sm:text-sm font-medium text-center">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.organization
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Company Name"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.organization}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Role/Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.role ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="CEO, Founder, etc."
                    />
                    {errors.role && (
                      <p className="mt-1 text-xs text-red-500">{errors.role}</p>
                    )}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Interests (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className={`flex items-center p-2 sm:p-3 rounded-lg border-2 cursor-pointer transition-colors text-xs sm:text-sm ${
                          formData.interests.includes(interest)
                            ? "border-primary-600 bg-primary-50 text-primary-600"
                            : "border-gray-300 hover:border-primary-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="sr-only"
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary w-full text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3"
                  >
                    Register Now
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-4">
                  <p className="text-sm sm:text-base text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
