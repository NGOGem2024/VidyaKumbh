import React, { useState } from "react";
import "../styles/RegistrationPage.css";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    city: "",
    courseInterested: "",
    educationLevel: "",
  });

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Other",
  ];

  const courses = {
    Graduation: [
      "B.Tech",
      "B.E.",
      "B.Sc",
      "B.Com",
      "BBA",
      "BCA",
      "B.A.",
      "B.Arch",
      "B.Pharm",
      "LLB",
    ],
    Postgraduation: [
      "M.Tech",
      "M.E.",
      "M.Sc",
      "M.Com",
      "MBA",
      "MCA",
      "M.A.",
      "M.Arch",
      "M.Pharm",
      "LLM",
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="main-wrapper">
        <div className="signup-form">
          <h2>Register Now To Apply</h2>
          <p>Get details and latest updates</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number *"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City *</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Education Level *</option>
              <option value="Graduation">Graduation</option>
              <option value="Postgraduation">Post Graduation</option>
            </select>
            <select
              name="courseInterested"
              value={formData.courseInterested}
              onChange={handleChange}
              required
              disabled={!formData.educationLevel}
            >
              <option value="">Select Course *</option>
              {formData.educationLevel &&
                courses[formData.educationLevel as keyof typeof courses].map(
                  (course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  )
                )}
            </select>
            <p className="tos">
              By submitting this form, you accept and agree to our
              <a href="#">Terms of Use</a>.
            </p>
            <button type="submit">SUBMIT</button>
          </form>
          <p className="signin-link">
            Already Registered? <a href="/login">Login Here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
