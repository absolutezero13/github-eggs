import React, { useContext } from "react";
import repositoriesSVG from "../Icons/repositories.svg";
import usersSVG from "../Icons/users.svg";
import bookmarkblackSVG from "../Icons/bookmarkblack.svg";
import { Link } from "react-router-dom";
import { GithubContext } from "../Context/GithubContext";
const SideBarSearchResults: React.FC = () => {
  const { repoCount, userCount } = useContext(GithubContext);
  return (
    <div className="side-bar-search-results">
      <Link to="/">
        <div className="side-bar-search-results__repositories">
          <img src={repositoriesSVG} alt="repo" />
          <p className="result-title">Repositories</p>
          <p className="quantity">{repoCount ?? 0}</p>
        </div>
      </Link>
      <Link to="/search-users">
        <div className="side-bar-search-results__users">
          <img src={usersSVG} alt="users" />
          <p className="result-title">Users</p>
          <p className="quantity">{userCount ?? 0}</p>
        </div>
      </Link>
      <div className="side-bar-search-results__bookmarked ">
        <img src={bookmarkblackSVG} alt="bookmarked" />
        <Link to="/repo-details">
          <p className="result-title">Bookmarked</p>
        </Link>
        <p className="quantity">15</p>
      </div>
    </div>
  );
};

export default SideBarSearchResults;
