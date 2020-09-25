import React from "react";
import "./SectionDivider.scss";
const SectionDivider = ({ text }) => {
  return (
    <>
      <p className="divider-text">{text}</p>
      <div className="divider" />
    </>
  );
};

export default SectionDivider;
