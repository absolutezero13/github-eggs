import React, { useContext, useEffect, useRef, useState } from "react";
import searchSVG from "../Icons/search.svg";
import bookmarkSVG from "../Icons/bookmark.svg";
import { GithubContext } from "../Context/GithubContext";
import { withRouter, Link } from "react-router-dom";
import { debounce } from "lodash";
const Header: React.FC = () => {
  const { searchEverything } = useContext(GithubContext);
  return (
    <div className="header">
      <div className="logo-box">
        <h1>Github Eggs</h1>
      </div>
      <div className="header__search">
        <img
          src={searchSVG}
          className="header__search__icon"
          alt="search-icon"
        />
        <input
          onChange={debounce((e) => searchEverything(e.target.value), 1000)}
          type="search"
          className="header__search__input"
          placeholder="Search..."
        />
      </div>
      <Link to="/github-eggs/search-bookmarks">
        <div className="header__bookmarks">
          <img
            src={bookmarkSVG}
            className="header__bookmark-icon"
            alt="bookmark-icon"
          />
          <p>Bookmarks</p>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(Header);
