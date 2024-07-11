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
        "https://content3.jdmagicbox.com/v2/comp/solapur/s1/9999px217.x217.130628134229.g3s1/catalogue/vidya-vikas-pratishthan-institute-of-engineering-and-technology-navi-peth-solapur-institutes-for-civil-engineering-1lmul9kkto.jpg",
      location: "Soregaon, Solapur",
      established: 2009,
      visit: "https://vvpengineering.org/",
      brochure:
        "https://vvpedulink.ac.in/wp-content/uploads/2024/02/VVP-Engg.-College.pdf",
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
      about:
        "The Vidya Vikas Pratishthan, Solapur has been founded by 08 highly eminent personalities who are Technocrats, Bureaucrats, and Enterpreneneurs. All of them have varied experience in various fields. They joined their hands and founded this trust, with a broad vision to transform the society through education and to serve for welfare of the people. Our college was established in 2007.we have made astonishing progress in terms of recruiting staff and with student's results.",
      principal: "Dr. S.N.Kulkarni",
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
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",

      about:
        "The institute is having excellent infrastructure including building, laboratories, library and other amenities creating an excellent learning environment. Institute buildings are well planned about 2 lacs sq.ft. buit up area on 10 acre land which is a part of total 70 acre of land. The building is the best example of modern architecture with due care of illumination and ventilation. The premise has very nice landscaping. Tree plantation adds green, eco-friendly aspect to this landscaping.",
      principal: "Dr. Raghavendra. D. Kulkarni",
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
        "https://www.orchidengg.ac.in/wp-content/uploads/2019/05/clg-img.jpg",
      location: "Tuljapur Road, Solapur",
      established: 2009,
      visit: "https://www.orchidengg.ac.in/",
      brochure:
        "https://www.orchidengg.ac.in/wp-content/uploads/2021/11/College-Bochure-2021-22-UPDATED-11112021.pdf",
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",

      about:
        "N. K. Orchid College of Engineering & Technology, Solapur (NKOCET) started from the academic year 2008-09. NKOCET is approved by AICTE, New Delhi, recognized by Government of Maharashtra affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere. The NKOCET has spread over picturesque, sprawling land of 10.6 acres in the vicinity of Hipparga Lake in Tale-Hipparaga, Solapur. It has emerged as a preferred knowledge destination for aspiring Engineering students.",
      principal: "Dr. B. K. Sonage",
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
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",

      about:
        "Shree Siddheshwar Women’s College of Engineering, Solapur is run by Shri Siddheshwar Devasthan, Solapur. SSWCOE is approved by AICTE New Delhi, opened its gate for technology Education from 2019-20. It is recognized by Gov. Of Maharashtra & affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere (DBATU). It is the first Women’s Engineering College in Solapur district.",
      principal: "Prof. Dr.T.A.Chavan",
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
        "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3190/2023/9/4/College%20Building%20of%20AG%20Patil%20Institute%20of%20Technology%20Solapur_Campus-View.jpg",
      location: "Soregaon, Solapur",
      established: 2008,
      visit: "http://www.agpit.edu.in/",
      brochure: "http://www.agpit.edu.in/download/INFORMATION_BROUCHER.pdf",
      phone:
        "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
      about:
        "A. G. Patil Institute of Technology, Solapur (AGPIT) started from the academic year 2008-09. AGPIT is approved by AICTE, New Delhi, recognized by Government of Maharashtra affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere. The AGPIT has spread over picturesque, sprawling land of 10 acres in Vijapur Road, Solapur. AGPIT provides excellent engineering education and creates globally competent technocrats.",
      principal: "Dr. V.V.Potdar",
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
              </div>
              <div className="btdiv">
                <button
                  className="btn34"
                  onClick={() => setSelectedCollege(college)}
                >
                  <BsQrCodeScan className="dwicon" /> Talk to Admission
                </button>

                <button
                  className="btn34"
                  onClick={() => setSelectedCollege(college)}
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
        />
      )}
    </div>
  );
};

export default CollegeList;
