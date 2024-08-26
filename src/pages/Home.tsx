import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import CollegeList from "../components/CollegeList";
import { Search, Map as MapIcon } from "lucide-react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import useTypingEffect from "../hooks/useTypingEffect";
import SchoolMap from "../components/Map";
import SearchSuggestions from "../components/SearchSuggestions";
import { College } from "../types";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showMap, setShowMap] = useState(true);

  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const typedText = useTypingEffect(" Virtual Education Expo-2024..", 50);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    // Fetch colleges data or import it from a local file
    const fetchColleges = async () => {
      // Replace this with actual API call or data import
      const dummyColleges: College[] = [
        {
          id: 1,
          name: "Walchand Institute of Technology, Solapur",
          ranking: 1,
          imageUrl:
            "https://img.jagranjosh.com/images/2024/March/1932024/Campus%20VIew1.2d.jpg",
          location: "Ashok Chowk, Solapur",
          established: 1983,
          visit: "https://witsolapur.org/",
          brochure: "",
          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          admissionQrImage: "/images/qrcode.jpg",
          placementQrImage: "/images/qrcode.jpg",
          about:
            "Walchand Institute of Technology, Solapur is a prestigious engineering institution known for its excellence in technical education...",
          principal: "Dr. Vijay Athavale",
          courses: [
            {
              name: "Computer Science and Engineering",
              duration: "4 years",
              description:
                "This program focuses on software development, algorithms, and computer systems.",
            },
            // ... other courses
          ],
          facilities: [
            "State-of-the-art Laboratories",
            "Well-stocked Library",
            "Sports Complex",
            // ... other facilities
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

          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/7f724250-02fa-48b9-9adc-f5b83fce1c79",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/7f724250-02fa-48b9-9adc-f5b83fce1c79",
          admissionQrImage: "/images/qrcodeVVPboth.png",
          placementQrImage: "/images/qrcodeVVPboth.png",
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

          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/a9425eff-0619-4ee9-ad7c-65c2e1e6a4ef",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/f3120702-a67c-422f-9e8b-7c88a5828687",
          admissionQrImage: "/images/qrcodeBMITAdmissionCell.png",
          placementQrImage: "/images/qrcodeBMITPlacementCell.png",
          about:
            "The institute is having excellent infrastructure including building, laboratories, library and other amenities creating an excellent learning environment. Institute buildings are well planned about 2 lacs sq.ft. buit up area on 10 acre land which is a part of total 70 acre of land. The building is the best example of modern architecture with due care of illumination and ventilation. The premise has very nice landscaping. Tree plantation adds green, eco-friendly aspect to this landscaping.",
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

          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          admissionQrImage: "/images/qrcode.jpg",
          placementQrImage: "/images/qrcode.jpg",
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
          brochure:
            "https://www.sswcoe.edu.in/img/College%20Brochure%2023-24.pdf",

          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          admissionQrImage: "/images/qrcode.jpg",
          placementQrImage: "/images/qrcode.jpg",
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

          admissionqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          placementqr:
            "https://beacon.concierge.liveswitch.com/qrcode/6d4186ba-5c95-4ef2-99fb-7e573cbc11f0",
          admissionQrImage: "/images/qrcode.jpg",
          placementQrImage: "/images/qrcode.jpg",
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
          ],
          facilities: [
            "State-of-the-art Laboratories",
            "Well-stocked Library",
            "Sports Complex",
          ],
        },
      ];
      setColleges(dummyColleges);
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredColleges(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredColleges([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, colleges]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can add additional search logic here if needed
  };

  const handleSuggestionClick = (college: College) => {
    setSearchQuery(college.name);
    setShowSuggestions(false);
    navigate("/collegedetailpage", { state: { college } });
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

  // Animation for the toggle button
  // const toggleAnimation = useSpring({
  //   transform: showMap ? "rotate(180deg)" : "rotate(0deg)",
  //   config: config.wobbly,

  // });

  // Animation for the map container

  // const mapAnimation = useSpring({
  //   opacity: showMap ? 1 : 0,
  //   // height: showMap ? "400px" : "0px",
  // });

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
        </div>
      </animated.div>
      <div ref={searchRef} className="search-container">
        <animated.form onSubmit={handleSearch} style={glowAnimation}>
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
        {showSuggestions && (
          <SearchSuggestions
            suggestions={filteredColleges}
            onSuggestionClick={handleSuggestionClick}
            searchTerm={searchQuery}
          />
        )}
      </div>
      <h2 className="college-list-title">Top Colleges in Solapur</h2>
      <div className="map-toggle-container">
        <button onClick={toggleMap} className="map-toggle-button">
          <MapIcon size={20} />
          {showMap ? "Hide Map" : "Show Map"}
        </button>
      </div>
      <div className="nom">
        {/* <animated.div className="map-container" style={mapAnimation}>
        </animated.div> */}
        {showMap && <SchoolMap />}
        <div className="mapandlistsection">
          <CollegeList colleges={colleges} />
        </div>
      </div>
      <div className="home-content">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
