import React, { useEffect, useRef, useState } from "react";
import "../styles/Alerts.css";

interface Alert {
  id: number;
  type: "Result" | "Cutoff" | "Form";
  message: string;
}

const Alerts: React.FC = () => {
  const initialAlerts: Alert[] = [
    {
      id: 1,
      type: "Result",
      message: "CBSE Class 12 results to be announced soon",
    },
    { id: 2, type: "Cutoff", message: "JEE Main 2024 cutoff scores released" },
    {
      id: 3,
      type: "Form",
      message: "UPSC Civil Services 2024 application form available now",
    },
    {
      id: 4,
      type: "Result",
      message: "NEET 2024 results declared",
    },
    {
      id: 5,
      type: "Cutoff",
      message: "IIT-JEE Advanced 2024 cutoff announced",
    },
  ];

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const alertsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate the alerts to create a seamless loop
    setAlerts([...initialAlerts, ...initialAlerts]);
  }, []);

  useEffect(() => {
    const alertsContainer = alertsRef.current;
    if (alertsContainer) {
      const scrollAnimation = () => {
        if (alertsContainer.scrollTop >= alertsContainer.scrollHeight / 2) {
          alertsContainer.scrollTop = 0;
        } else {
          alertsContainer.scrollTop += 1;
        }
      };

      const intervalId = setInterval(scrollAnimation, 50);

      return () => clearInterval(intervalId);
    }
  }, [alerts]);

  return (
    <div className="alerts-component">
      <h2>Important Alerts</h2>
      <div ref={alertsRef} className="alerts-container">
        <div className="alerts-scroll">
          {alerts.map((alert, index) => (
            <div key={`${alert.id}-${index}`} className="alert-item">
              <span className={`alert-type ${alert.type.toLowerCase()}`}>
                {alert.type}
              </span>
              <span className="alert-message">{alert.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
