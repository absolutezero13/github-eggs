import React from "react";
import isaSVG from "../Icons/star.svg";
const UsersPage: React.FC = () => {
  return (
    <div className="main-search-results">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2>3 User Results</h2>
        </div>
        <div className="main-search-results__repository-results__result">
          <div className="main-search-results__repository-results__result__title">
            <img src={isaSVG} alt="user" />
            <h4>İsa Tanış</h4>
          </div>
          <p>Lead Developer @digieggs</p>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
