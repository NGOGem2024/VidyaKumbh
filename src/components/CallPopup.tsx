import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaCopy, FaCheck } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import "../styles/CallPopup.css";

interface College {
  id: number;
  name: string;
  ranking: number;
  imageUrl: string;
  location: string;
  established: number;
  visit: string;
  brochure: string;
  admissionqr: string;
  placementqr: string;
  admissionQrImage: string; // New property for admission QR code image
  placementQrImage: string; // New property for placement QR code image
  about: string;
  principal: string;
  courses: Array<{
    name: string;
    duration: string;
    description: string;
  }>;
  facilities: string[];
}

interface CallPopupProps {
  college: College;
  onClose: () => void;
  callType: "admission" | "placement";
}

const CallPopup: React.FC<CallPopupProps> = ({
  college,
  onClose,
  callType,
}) => {
  const [copied, setCopied] = useState(false);

  const qrLink =
    callType === "admission" ? college.admissionqr : college.placementqr;
  const qrImage =
    callType === "admission"
      ? college.admissionQrImage
      : college.placementQrImage;
  const cellType = callType === "admission" ? "Admission" : "Placement";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCall = () => {
    window.open(qrLink, "_blank");
  };

  return (
    <div className="call-popup">
      <div className="call-popup-content">
        <h3>
          Call "{college.name}" {cellType} Cell
        </h3>
        <img src={qrImage} alt={`${cellType} QR Code for ${college.name}`} />

        <p className="join-url">
          Join URL:
          <span className="copy-wrapper">
            {qrLink.slice(0, 20)}...
            <span
              className={`copy-icon ${copied ? "copied" : ""}`}
              onClick={handleCopy}
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </span>
          </span>
        </p>
        <div className="call-buttons">
          <button className="call-button" onClick={handleCall}>
            <IoMdVideocam className="icncall" />
          </button>
          <button className="reject-button" onClick={onClose}>
            <IoCloseCircle className="icncall" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallPopup;
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