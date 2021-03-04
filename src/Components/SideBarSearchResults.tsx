import React from "react";
import repositoriesSVG from "../Icons/repositories.svg";
import usersSVG from "../Icons/users.svg";
import bookmarkblackSVG from "../Icons/bookmarkblack.svg";
import { Link } from "react-router-dom";
const SideBarSearchResults: React.FC = () => {
  return (
    <div className="side-bar-search-results">
      <Link to="/search-results">
        <div className="side-bar-search-results__repositories">
          <img src={repositoriesSVG} alt="repo" />
          <p className="result-title">Repositories</p>
          <p className="quantity">2654</p>
        </div>
      </Link>
      <Link to="/search-users">
        <div className="side-bar-search-results__users">
          <img src={usersSVG} alt="users" />
          <p className="result-title">Users</p>
          <p className="quantity">5</p>
        </div>
      </Link>
      <div className="side-bar-search-results__bookmarked ">
        <img src={bookmarkblackSVG} alt="bookmarked" />
        <p className="result-title">Bookmarked</p>
        <p className="quantity">15</p>
      </div>
    </div>
  );
};

export default SideBarSearchResults;
