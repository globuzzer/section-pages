import React, { useState } from "react";
import "./NavigationMobile.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { animated, useSpring } from "react-spring";
import { ReactComponent as Logo } from "../../assets/globuzzer_logo.svg";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
import CustomButton from "../CustomButton/CustomButton";
import mobileIcon from "../../assets/Navigation/icons8-menu-50.svg";
import one from "../../assets/Navigation/1.svg";
import two from "../../assets/Navigation/2.svg";
import three from "../../assets/Navigation/3.svg";
import four from "../../assets/Navigation/4.svg";
import five from "../../assets/Navigation/5.svg";
import six from "../../assets/Navigation/6.svg";
const NavigationMobile = () => {
  const { width, height } = GetWindowDimension();
  const [isOpen, setIsOpen] = useState(false);

  const animation = useSpring({
    height: isOpen ? `${height}px` : "0px",
    opacity: isOpen ? 1 : 0,
    width: isOpen ? `${width / 1.6}px` : "0px",
    backgroundColor: "#2A293A",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: isOpen ? "auto" : "none",
    display: "flex",
    flexDirection: "column",
    config: {
      duration: isOpen ? 100 : 150,
    },
  });

  const NavMobileMenu = () => (
    <div>
      <animated.div style={animation} className="mobile-menu">
        <div className="nav-top">
          <HashLink className="nav-item" to="/#section_newcity" smooth>
            <img src={three} alt="nav-icon" className="nav-icon" />
            Destination
          </HashLink>
          <HashLink className="nav-item" to="/#aux_services" smooth>
            <img src={four} alt="nav-icon" className="nav-icon" />
            Services
          </HashLink>
          <HashLink className="nav-item" to="/topics" smooth>
            <img src={one} alt="nav-icon" className="nav-icon" />
            Topics
          </HashLink>
          <HashLink className="nav-item" to="/pricing" smooth>
            <img src={two} alt="nav-icon" className="nav-icon" />
            Pricing
          </HashLink>
          <HashLink className="nav-item" to="/career" smooth>
            <img src={six} alt="nav-icon" className="nav-icon" />
            Career
          </HashLink>
          <HashLink className="nav-item" to="/about" smooth>
            <img src={five} alt="nav-icon" className="nav-icon" />
            About us
          </HashLink>
        </div>
        <div className="nav-bottom">
          <CustomButton>Own your own city section</CustomButton>
          <div className="nav-bottom-container">
            <span className="login-btn">
              <Link>Login</Link>
            </span>
            <CustomButton inverted>Sign Up</CustomButton>
          </div>
        </div>
      </animated.div>
    </div>
  );
  return (
    <div className="mobile-navigation">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <img
        className="mobile-icon"
        src={mobileIcon}
        alt="mobile-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavMobileMenu />
    </div>
  );
};

export default NavigationMobile;
