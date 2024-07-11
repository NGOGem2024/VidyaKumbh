import React from "react";
import Alerts from "../components/Alerts";
import "../styles/AlertsPage.css";

const AlertsPage = () => {
  return (
    <div className="alerts-page">
      <h1>Important Alerts</h1>
      <p>
        Get the latest updates on results, cutoffs, and application forms for
        top exams.
      </p>
      <Alerts />
    </div>
  );
};

export default AlertsPage;
