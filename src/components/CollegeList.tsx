import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallPopup from "../components/CallPopup";
import { MdDownload } from "react-icons/md";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { BsQrCodeScan } from "react-icons/bs";
import "../styles/CollegeList.css";
import { College } from "../types";

interface CollegeListProps {
  colleges: College[];
  // searchQuery: string; // We'll keep this prop for consistency, but won't use it for filtering
}

const CollegeList: React.FC<CollegeListProps> = ({ colleges }) => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const navigate = useNavigate();
  const [callType, setCallType] = useState<"admission" | "placement">(
    "admission"
  );

  const handleCollegeClick = (college: College) => {
    navigate("/collegedetailpage", { state: { college } });
  };

  const handleCallClick = (
    college: College,
    type: "admission" | "placement"
  ) => {
    setSelectedCollege(college);
    setCallType(type);
  };

  return (
    <div className="college-list-container">
      <div className="college-grid">
        {colleges.map((college) => (
          <div key={college.id} className="college-card">
            <div
              className="college-image"
              style={{ backgroundImage: `url(${college.imageUrl})` }}
              onClick={() => handleCollegeClick(college)}
            >
              <div className="college-overlay"></div>
            </div>
            <div className="college-info">
              <h3 className="college-name">{college.name}</h3>
              <p className="college-location">
                <i className="fas fa-map-marker-alt"></i> {college.location}
              </p>
              <p className="college-established">
                <i className="fas fa-calendar-alt"></i> Est.
                {college.established}
              </p>
              <div className="btndiv">
                {college.brochure ? (
                  <a href={college.brochure} className="clgvisit">
                    <button className="btn34">
                      <MdDownload className="dwicon" />
                      Download Brochure
                    </button>
                  </a>
                ) : (
                  <button className="btn34" disabled>
                    <MdDownload className="dwicon" />
                    Brochure Unavailable
                  </button>
                )}
                <a className="clgvisit" href={college.visit}>
                  <button className="btn34">
                    <PiGlobeHemisphereWestDuotone className="dwicon" />
                    Visit Site
                  </button>
                </a>
              </div>
              <div className="btdiv">
                <button
                  className="btn34"
                  onClick={() => handleCallClick(college, "admission")}
                >
                  <BsQrCodeScan className="dwicon" /> Talk to Admission
                </button>
                <button
                  className="btn34"
                  onClick={() => handleCallClick(college, "placement")}
                >
                  <BsQrCodeScan className="dwicon" /> Talk to Placement
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCollege && (
        <CallPopup
          college={selectedCollege}
          onClose={() => setSelectedCollege(null)}
          callType={callType}
        />
      )}
    </div>
  );
};

export default CollegeList;
