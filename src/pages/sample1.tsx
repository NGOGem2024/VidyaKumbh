import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CallPopup from "../components/CallPopup";
import { MdDownload } from "react-icons/md";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { BsQrCodeScan } from "react-icons/bs";
import "../styles/CollegeList.css";

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
  courses: Array<{
    name: string;
    duration: string;
    description: string;
  }>;
  facilities: string[];
}

const CollegeList: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const navigate = useNavigate();

  const colleges: College[] = [
    {
      id: 1,
      name: "Walchand Institute of Technology, Solapur",
      ranking: 1,
      imageUrl:
        "https://img.jagranjosh.com/images/2024/March/1932024/Campus%20VIew1.2d.jpg",
      location: "Ashok Chowk, Solapur",
      established: 1983,
      visit: "https://witsolapur.org/",
      brochure:
        "https://tmpfiles.org/dl/8770087/walchand_institute_of_technology.pdf",
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },
    {
      id: 2,
      name: "VVP Institute of Engineering & Technology, Solapur",
      ranking: 2,
      imageUrl:
        "https://5bestincity.com/profileimages/india/n-k-orchid-college-of-engineering-technology-engineering-colleges-solapur-maharashtra/28054-85509-1.jpg",
      location: "Soregaon, Solapur",
      established: 2009,
      visit: "https://vvpengineering.org/",
      brochure:
        "https://vvpedulink.ac.in/wp-content/uploads/2024/02/VVP-Engg.-College.pdf",
      phone: "9098737389",
      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },
    {
      id: 3,
      name: "Bramhadevdada Mane Institute of Technology, Belati",
      ranking: 3,
      imageUrl: "https://bmitsolapur.org/assets/hero/hero.jpeg",
      location: "Belati, Solapur",
      established: 2006,
      visit: "https://bmitsolapur.org/",
      brochure: "",
      phone: "9145168279",

      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },

    {
      id: 4,
      name: "N.K. Orchid College of Engineering & Technology, Solapur",
      ranking: 4,
      imageUrl:
        "https://5bestincity.com/profileimages/india/n-k-orchid-college-of-engineering-technology-engineering-colleges-solapur-maharashtra/28054-85509-1.jpg",
      location: "Tuljapur Road, Solapur",
      established: 2009,
      visit: "https://www.orchidengg.ac.in/",
      brochure:
        "https://www.orchidengg.ac.in/wp-content/uploads/2021/11/College-Bochure-2021-22-UPDATED-11112021.pdf",
      phone: "3738383930",

      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },
    {
      id: 5,
      name: "Shree Siddheshwar Women's College of Engineering, Solapur ",
      ranking: 5,
      imageUrl:
        "https://5bestincity.com/profileimages/india/shree-siddheshwar-womens-college-of-engineering-engineering-colleges-solapur-maharashtra/28038-16176-1.jpg",
      location: "Solapur City",
      established: 2019,
      visit: "https://www.sswcoe.edu.in/",
      brochure: "https://www.sswcoe.edu.in/img/College%20Brochure%2023-24.pdf",
      phone: "9089786756",

      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },
    {
      id: 6,
      name: "A.G. Patil Institute of Technology, Solapur",
      ranking: 6,
      imageUrl:
        "https://5bestincity.com/profileimages/india/ag-patil-institute-of-technology-engineering-colleges-solapur-maharashtra/28040-3231f-1.jpg",
      location: "Soregaon, Solapur",
      established: 2008,
      visit: "http://www.agpit.edu.in/",
      brochure: "http://www.agpit.edu.in/download/INFORMATION_BROUCHER.pdf",
      phone: "9089786756",
      about:
        "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education. Established in 1983, it has been at the forefront of producing skilled engineers and innovators.",
      principal: "Dr. Vijay Athavale",
      courses: [
        {
          name: "Computer Science and Engineering",
          duration: "4 years",
          description:
            "This program focuses on software development, algorithms, and computer systems.",
        },
        // Add more courses here
      ],
      facilities: [
        "State-of-the-art Laboratories",
        "Well-stocked Library",
        "Sports Complex",
        // Add more facilities here
      ],
    },
    // Add more colleges here
  ];

  const handleCollegeClick = (college: College) => {
    navigate("/collegedetailpage", { state: { college } });
  };

  return (
    <div className="college-list-container">
      <h2 className="college-list-title">Top Colleges in Solapur</h2>
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
                <i className="fas fa-calendar-alt"></i> Est.{" "}
                {college.established}
              </p>
              <div className="btndiv">
                <a href={college.brochure} className="clgvisit">
                  <button className="btn34">
                    <MdDownload className="dwicon" />
                    Download Brochure
                  </button>
                </a>
                <a className="clgvisit" href={college.visit}>
                  <button className="btn34">
                    <PiGlobeHemisphereWestDuotone className="dwicon" />
                    Visit Site
                  </button>
                </a>
                <button
                  className="btn34"
                  onClick={() => setSelectedCollege(college)}
                >
                  <BsQrCodeScan className="dwicon" />
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
        />
      )}
    </div>
  );
};

export default CollegeList;
