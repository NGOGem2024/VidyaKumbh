import React from "react";
import "../styles/CollegeList.css";

interface College {
  id: number;
  name: string;
  shortName: string;
  location: string;
  accreditation: string;
  rating: number;
  courseType: string;
  fees: string;
  feesType: string;
  ranking: string;
  reviews: number;
  imageUrl: string;
}

const CollegeList: React.FC = () => {
  const colleges: College[] = [
    {
      id: 1,
      name: "IIT Madras - Indian Institute of Technology",
      shortName: "IITM",
      location: "Chennai, Tamil Nadu",
      accreditation: "AICTE",
      rating: 10,
      courseType: "BE/B.Tech",
      fees: "2.15 Lacs",
      feesType: "First Year Fees",
      ranking: "Ranked 227 out of 1400 QS",
      reviews: 356,
      imageUrl: "https://bmitsolapur.org/assets/hero/hero.jpeg",
    },
    // Add more college objects here...
  ];

  return (
    <div className="college-list-container">
      <h2 className="college-list-title">Top Universities/Colleges</h2>
      <div className="college-grid">
        {colleges.map((college) => (
          <div key={college.id} className="college-card">
            <div
              className="college-image"
              style={{ backgroundImage: `url(${college.imageUrl})` }}
            >
              <div className="college-rating">{college.rating}/10</div>
              <div className="college-overlay">
                <h3 className="college-name">{college.name}</h3>
                <p className="college-location">
                  {college.location} | {college.accreditation}
                </p>
              </div>
            </div>
            <div className="college-info">
              <div className="college-course-info">
                <span className="course-type">{college.courseType}</span>
                <span className="course-rating">★ {college.rating}/5</span>
                <span className="course-reviews">
                  {college.reviews} reviews
                </span>
              </div>
              <div className="college-fees">
                <span className="fees-amount">{college.fees}</span>
                <span className="fees-type">{college.feesType}</span>
              </div>
              <p className="college-ranking">{college.ranking}</p>
              <div className="college-actions">
                <button className="action-btn">
                  View All Courses and fees
                </button>
                <button className="action-btn">Download Brochure</button>
                <button className="action-btn">Compare</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeList;
