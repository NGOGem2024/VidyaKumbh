import React, { useState } from "react";
import "../styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="login-container">
      <div className="main-wrapper">
        <div className="login-form">
          <h2>Login to Your Account</h2>
          <p>Access your CoolCampus profile</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit">LOGIN</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/register">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
