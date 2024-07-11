import React from "react";
import "../styles/Colleges.css";
import CollegeList from "../components/CollegeList";

const Colleges = () => {
  return (
    <div className="colleges">
      <h1>Top Colleges in India</h1>
      <p className="clgp">
        Explore detailed information about the best colleges in India.
      </p>
      <CollegeList />
    </div>
  );
};

export default Colleges;
