import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdDownload, MdCall } from "react-icons/md";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { BsQrCodeScan } from "react-icons/bs";
import "../styles/CollegeDetailPage.css";
import CallPopup from "../components/CallPopup";
import Footer from "../components/Footer";

interface Course {
  name: string;
  duration: string;
  description: string;
}

interface College {
  id: number;
  name: string;
  ranking: number;
  imageUrl: string;
  location: string;
  established: number;
  visit: string;
  brochure: string;
  phone: string;
  about: string;
  principal: string;
  courses: Course[];
  facilities: string[];
}

const CollegeDetailPage: React.FC = () => {
  const location = useLocation();
  const college: College = location.state?.college;

  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  if (!college) {
    return <div>No college data available</div>;
  }

  return (
    <div className="college-detail-container">
      <div className="college-header">
        <img
          src={college.imageUrl}
          alt={college.name}
          className="college-banner"
        />
        <div className="college-title-section">
          <h1 className="collegename">{college.name}</h1>
          <div className="college-basic-info">
            <span>
              <i className="fas fa-map-marker-alt"></i> {college.location}
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i> Est. {college.established}
            </span>
          </div>
        </div>
      </div>

      <div className="college-content">
        <div className="college-about-section">
          <section className="about-section">
            <h2>About {college.name}</h2>
            <p>{college.about}</p>
            <p>
              <strong>Principal:</strong> {college.principal}
            </p>
            <p>
              <strong>Estd Year:</strong> {college.established}
            </p>
            <p>
              <strong>Location:</strong> {college.location}
            </p>
            <div className="aboutbottom">
              <a href={college.brochure} className="action-button dwbtn">
                <MdDownload /> Download Brochure
              </a>
              <a href={college.visit} className="action-button vtbtn">
                <PiGlobeHemisphereWestDuotone /> Visit Website
              </a>
            </div>
          </section>
          <div className="action-buttons">
            <button
              onClick={() => setSelectedCollege(college)}
              className="action-button callbtn"
            >
              <BsQrCodeScan className="icncall" /> Talk for Admission
            </button>
            <button
              onClick={() => setSelectedCollege(college)}
              className="action-button callbtn"
            >
              <BsQrCodeScan className="icncall" /> Talk for Placement
            </button>
          </div>
        </div>
        {/* <section className="courses-section">
          <h2>List of Courses Offered</h2>
          <div className="course-table-container">
            <table className="course-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {college.courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.duration}</td>
                    <td>{course.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="facilities-section">
          <h2>Facilities</h2>
          <ul className="facilities-list">
            {college.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </section> */}
      </div>
      <Footer />
      {selectedCollege && (
        <CallPopup
          college={selectedCollege}
          onClose={() => setSelectedCollege(null)}
        />
      )}
    </div>
  );
};

export default CollegeDetailPage;
