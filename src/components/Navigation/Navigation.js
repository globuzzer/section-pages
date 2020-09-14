import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
import CustomButton from "../CustomButton/CustomButton";
import NavigationMobile from "./NavigationMobile";
const Navigation = () => {
  const { width } = GetWindowDimension();

  const DesktopNav = () => (
    <div className="nav">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option">Destinations</Link>
      </div>
      <div className="options">
        <Link className="option">Services</Link>
      </div>
      <div className="options">
        <Link className="option">Topics</Link>
      </div>
      <div className="options">
        <Link className="option">Pricing</Link>
      </div>
      <div className="options">
        <Link className="option">Career</Link>
      </div>
      <div className="options">
        <Link className="option">About us</Link>
      </div>
      <div className="options">
        <CustomButton>Own your own city section</CustomButton>
      </div>

      <div className="options">
        <span className="login-btn">
          <Link>Login</Link>
        </span>
        <CustomButton inverted>Sign Up</CustomButton>
      </div>
    </div>
  );
  return <>{width > 1100 ? <DesktopNav /> : <NavigationMobile />}</>;
};

export default Navigation;
