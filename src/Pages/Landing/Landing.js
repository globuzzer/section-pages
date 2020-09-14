import React from "react";
import background from "../../assets/background.jpg";
import "./Landing.scss";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
const Landing = () => {
  const { width, height } = GetWindowDimension();
  return (
    <div className="header">
      {/* <img
        className="background-image"
        src={background}
        alt="background-image"
      /> */}
    </div>
  );
};

export default Landing;
