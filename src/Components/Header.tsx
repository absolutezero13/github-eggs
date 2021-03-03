import React from "react";
import logo from "../Icons/logo.svg";
import search from "../Icons/search.svg";
import bookmark from "../Icons/bookmark.svg";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <img src={logo} alt="logo" />{" "}
      </div>
      <div className="header__search">
        <img src={search} className="header__search__icon" alt="search-icon" />
        <input
          type="search"
          className="header__search__input"
          placeholder="Search..."
        />
      </div>
      <div className="header__bookmarks">
        <img
          src={bookmark}
          className="header__bookmark-icon"
          alt="bookmark-icon"
        />
        <p>Bookmarks</p>
      </div>
    </div>
  );
};

export default Header;
