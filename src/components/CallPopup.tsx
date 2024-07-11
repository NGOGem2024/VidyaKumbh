import React, { useState } from "react";
import qrcode from "../assets/qrcode.jpg";
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
  phone: string;
}

const CallPopup: React.FC<{ college: College; onClose: () => void }> = ({
  college,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(college.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCall = () => {
    window.open(college.phone, "_blank");
  };

  return (
    <div className="call-popup">
      <div className="call-popup-content">
        <h3>Call "{college.name}"</h3>
        <img src={qrcode} alt="QR Code" />

        <p className="join-url">
          Join URL:
          <span className="copy-wrapper">
            {college.phone.slice(0, 20)}...
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
