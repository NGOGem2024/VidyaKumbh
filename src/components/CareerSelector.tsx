import React, { useState, useEffect } from "react";
import "../styles/CareerSelector.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface CareerOption {
  title: string;
  icon: string;
  colleges: number;
  courses: string[];
}

const careerOptions: CareerOption[] = [
  {
    title: "Engineering",
    icon: "👷‍♂️",
    colleges: 6207,
    courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
  },
  {
    title: "Management",
    icon: "📈",
    colleges: 7573,
    courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
  },
  {
    title: "Commerce",
    icon: "🛒",
    colleges: 4863,
    courses: ["B.Com", "M.Com"],
  },
  {
    title: "Arts",
    icon: "🎨",
    colleges: 5489,
    courses: ["BA", "MA", "BFA", "BSW"],
  },
  {
    title: "Science",
    icon: "🧬",
    colleges: 5000,
    courses: ["BSc", "MSc", "PhD"],
  },
  {
    title: "Medicine",
    icon: "👨‍⚕️",
    colleges: 3500,
    courses: ["MBBS", "MD", "BDS"],
  },
  {
    title: "Law",
    icon: "⚖️",
    colleges: 2800,
    courses: ["LLB", "LLM", "BL"],
  },
];

const CareerSelector: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleCareerClick = (index: number) => {
    setSelectedCareer(selectedCareer === index ? null : index);
  };

  const handleNextClick = () => {
    if (startIndex < careerOptions.length - 4 && !isAnimating) {
      setDirection("right");
      setIsAnimating(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0 && !isAnimating) {
      setDirection("left");
      setIsAnimating(true);
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="career-selector">
      <h2>Choose Your Career Path</h2>
      <div className="career-options-container">
        <button
          className={`nav-button prev ${startIndex === 0 ? "hidden" : ""}`}
          onClick={handlePrevClick}
        >
          <MdArrowBackIos />
        </button>
        <div
          className={`career-options ${
            isAnimating ? `sliding-${direction}` : ""
          }`}
        >
          {careerOptions
            .slice(startIndex, startIndex + 4)
            .map((career, index) => (
              <div
                key={career.title}
                className={`career-card ${
                  selectedCareer === index ? "expanded" : ""
                }`}
                onClick={() => handleCareerClick(index)}
              >
                <div className="career-header">
                  <span className="career-icon">{career.icon}</span>
                  <h3>{career.title}</h3>
                  <span className="college-count">
                    {career.colleges} Colleges
                  </span>
                </div>
                <div
                  className={`career-courses ${
                    selectedCareer === index ? "show" : ""
                  }`}
                >
                  {career.courses.map((course) => (
                    <span key={course} className="course">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <button
          className={`nav-button next ${
            startIndex >= careerOptions.length - 4 ? "hidden" : ""
          }`}
          onClick={handleNextClick}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default CareerSelector;
