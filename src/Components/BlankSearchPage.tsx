import React from "react";
import searchPc from "../Icons/search-pc.svg";

const BlankSearchPage = () => {
  return (
    <div className="blank-search-page">
      <div className="blank-search-page__items">
        <img src={searchPc} alt="search-pc" />
        <p>Search results will appear here</p>
      </div>
    </div>
  );
};

export default BlankSearchPage;
