import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderContent.scss";
const HeaderContent = () => {
  return (
    <div className="header">
      <div className="header-url">
        <p>
          <Link to="/">Landing Page</Link>
        </p>
        <AiFillCaretRight className="header-url-icon" />
        <p>
          <Link to="/section-helsinki">Helsinki</Link>
        </p>
      </div>
      <div className="header-text">
        <p className="content-one">Helsinki Community</p>
        <p className="content-two">Explore different topics and information</p>
        <SearchBar />
        <p className="header-suggestion">
          Maybe <a href="https://globuzzer.mn.co/groups/195831/feed">Stockholm</a>,<a href="https://globuzzer.mn.co/groups/195832/feed"> Helsinki</a> or{" "}
          <a href="https://globuzzer.mn.co/groups/195834/feed">Paris</a>?
        </p>
      </div>
    </div>
  );
};

export default HeaderContent;
