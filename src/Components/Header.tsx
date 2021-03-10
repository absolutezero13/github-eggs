import React, { useContext } from "react";
import logo from "../Icons/logo.svg";
import searchSVG from "../Icons/search.svg";
import bookmarkSVG from "../Icons/bookmark.svg";
import { GithubContext } from "../Context/GithubContext";
const Header: React.FC = () => {
  const { searchEverything } = useContext(GithubContext);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__search">
        <img
          src={searchSVG}
          className="header__search__icon"
          alt="search-icon"
        />
        <input
          //onChange={(e) => searchEverything(e.target.value)}
          type="search"
          className="header__search__input"
          placeholder="Search..."
        />
      </div>
      <div className="header__bookmarks">
        <img
          src={bookmarkSVG}
          className="header__bookmark-icon"
          alt="bookmark-icon"
        />
        <p>Bookmarks</p>
      </div>
    </div>
  );
};

export default Header;
