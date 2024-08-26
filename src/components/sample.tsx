// import React, { useState, useEffect, useRef } from "react";
// import { useSpring, animated, config } from "react-spring";
// import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";
// import CollegeList from "../components/CollegeList";
// import { Search, Map as MapIcon } from "lucide-react";
// import "../styles/Home.css";
// import Footer from "../components/Footer";
// import useTypingEffect from "../hooks/useTypingEffect";
// import SchoolMap from "../components/Map";
// import SearchSuggestions from "../components/SearchSuggestions";
// import { College } from "../types";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [colleges, setColleges] = useState<College[]>([]);
//   const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();

//   // ... (rest of the existing code remains the same)

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <div className="home">
//       {/* ... (existing hero section and search container) ... */}

//       <h2 className="college-list-title">Top Colleges in Solapur</h2>
//       <div className="map-toggle-container">
//         <button onClick={toggleMap} className="map-toggle-button">
//           <MapIcon size={24} />
//           {showMap ? "Hide Map" : "Show Map"}
//         </button>
//       </div>
//       <div className="mapandlistsection">
//         {showMap && <SchoolMap />}
//         <CollegeList colleges={colleges} searchQuery={searchQuery} />
//       </div>

//       <div className="home-content">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;
