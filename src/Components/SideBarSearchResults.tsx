import React, { useContext, useEffect, useState } from "react";
import repositoriesSVG from "../Icons/repositories.svg";
import usersSVG from "../Icons/users.svg";
import bookmarkblackSVG from "../Icons/bookmarkblack.svg";
import { Link } from "react-router-dom";
import { GithubContext } from "../Context/GithubContext";
const SideBarSearchResults: React.FC = () => {
  const { repoCount, userCount, bookmarkedRepos } = useContext(GithubContext);
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
      <Link to="/search-bookmarks">
        <div className="side-bar-search-results__bookmarked ">
          <img src={bookmarkblackSVG} alt="bookmarked" />
          <p className="result-title">Bookmarked</p>
          <p className="quantity">
            {" "}
            {bookmarkedRepos && bookmarkedRepos.length}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideBarSearchResults;
