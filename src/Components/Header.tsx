import React, { useContext, useEffect, useRef, useState } from "react";
import searchSVG from "../Icons/search.svg";
import bookmarkSVG from "../Icons/bookmark.svg";
import { GithubContext } from "../Context/GithubContext";
import { BrowserRouter, Link } from "react-router-dom";
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
          onChange={(e) => searchEverything(e.target.value)}
          type="search"
          className="header__search__input"
          placeholder="Search..."
        />
      </div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default Header;
