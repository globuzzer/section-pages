import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderContent.scss";
const HeaderContent = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p className="content-one">Helsinki Community</p>
        <p className="content-two">Explore different topics and information</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderContent;
