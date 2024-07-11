import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import CollegeList from "../components/CollegeList";
import AdmissionNews from "../components/AdmissionNews";
import Alerts from "../components/Alerts";
import { Search } from "lucide-react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import CareerSelector from "../components/CareerSelector";
import useTypingEffect from "../hooks/useTypingEffect";
import SchoolMap from "../components/Map";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const typedText = useTypingEffect(" Virtual Education Expo-2024..", 50);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const heroAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  const floatingAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  const leavesAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 5000 },
  });

  const glowAnimation = useSpring({
    from: { boxShadow: "0 0 10px rgba(0, 174, 255, 0.5)" },
    to: async (next) => {
      while (true) {
        await next({ boxShadow: "0 0 20px rgba(0, 174, 255, 0.8)" });
        await next({ boxShadow: "0 0 10px rgba(0, 174, 255, 0.5)" });
      }
    },
    config: { duration: 1500 },
  });

  return (
    <div className="home">
      <animated.div ref={ref} style={heroAnimation} className="hero-section">
        <div className="hero-background"></div>
        <animated.img
          src="/images/onehat.svg"
          alt="Graduation Cap"
          className="floating-illustration graduation-cap"
          style={floatingAnimation}
        />
        <animated.img
          src="/images/leaves.svg"
          alt="leaves"
          className="floating-illustration leaves"
          style={leavesAnimation}
        />

        <div className="hero-content">
          <h1>{typedText}</h1>
          <p>
            Your one-stop destination for college information, admission news,
            and important alerts.
          </p>
          <animated.form
            onSubmit={handleSearch}
            className="search-container"
            style={glowAnimation}
          >
            <input
              type="text"
              placeholder="Search for colleges, courses, or exams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <Search size={24} />
            </button>
          </animated.form>
        </div>
      </animated.div>
      <h2 className="college-list-title">Top Colleges in Solapur</h2>
      <div className="mapandlistsection">
        <SchoolMap />
        <CollegeList />
      </div>

      <div className="home-content">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
