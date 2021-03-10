import React, { useContext } from "react";
import { GithubContext } from "../Context/GithubContext";
import searchPc from "../Icons/search-pc.svg";
import SearchResults from "./SearchResults";
const BlankSearchPage = () => {
  const { isSearched } = useContext(GithubContext);
  return (
    <div>
      {isSearched ? (
        <SearchResults />
      ) : (
        <div className="blank-search-page">
          <div className="blank-search-page__items">
            <img src={searchPc} alt="search-pc" />
            <p>Search results will appear here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlankSearchPage;
