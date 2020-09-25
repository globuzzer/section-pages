import React from "react";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import RecommendServices from "../../components/RecommendServices/RecommendServices";
import "./Landing.scss";
const Landing = () => {
  return (
    <div className="landing-page">
      <div className="section-header">
        <HeaderContent />
      </div>
      <div className="section-services">
        <RecommendServices />
      </div>
    </div>
  );
};

export default Landing;
