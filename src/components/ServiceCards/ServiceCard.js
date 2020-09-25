import React from "react";
import "./ServiceCard.scss";
const ServiceCard = ({ icon, text }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">{icon}</div>
      <div className="service-card-text">{text}</div>
    </div>
  );
};

export default ServiceCard;
