import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.scss";
import JoinCityData from "../../assets/data/JoinCityData";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [joinCity, setJoinCity] = useState(JoinCityData);
  const [currentURL, setCurrentURL] = useState();
  const node = useRef();

  useEffect(() => {
    fetchJoinCityData();
  }, [query]);

  const fetchJoinCityData = () => {
    const sorted = JoinCityData.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setJoinCity(sorted.sort());
  };

  const onSelectCity = (city, url) => {
    setIsVisible(!isVisible);
    setCurrentURL(url);
    setQuery(city);
  };

  const navigationHandler = (url) => {
    window.location.href = `${url}`;
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="search-city-container" ref={node}>
      <div className="header-search">
        <div className="search-input">
          <FiSearch className="search-icon" />
          <input
            autoComplete="new-password"
            type="text"
            placeholder="What's the next city you are moving to? "
            id="header-input-city"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <button
          type="button"
          className="button-submit"
          id="search-submit"
          onClick={() => {
            query !== ""
              ? navigationHandler(currentURL)
              : alert("Please enter a city name");
          }}
        >
          Let's go
        </button>
      </div>
      {isVisible && (
        <div className="search-result-containter">
          {JoinCityData.map((city, index) => (
            <button
              className="result-item"
              onClick={() => onSelectCity(city.name, city.url)}
              type="button"
              key={index}
            >
              {city.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
