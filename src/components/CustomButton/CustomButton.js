import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, inverted, mobile, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      mobile ? "mobile" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
