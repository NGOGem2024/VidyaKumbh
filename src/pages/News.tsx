import React from "react";
import AdmissionNews from "../components/AdmissionNews";
import "../styles/News.css";

const News = () => {
  return (
    <div className="news">
      <h1>Admission News</h1>
      <p>Stay updated with the latest admission news and announcements.</p>
      <AdmissionNews />
    </div>
  );
};

export default News;
