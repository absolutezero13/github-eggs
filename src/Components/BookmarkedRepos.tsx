import React from "react";
import repositorySVG from "../Icons/repository.svg";
const BookmarkedRepos: React.FC = () => {
  return (
    <div className="main-search-results bookmarked-repos">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2> 0 Bookmarked Repository Results</h2>
        </div>
        <div className="main-search-results__repository-results__result">
          <div className="main-search-results__repository-results__result__title">
            <img src={repositorySVG} alt="repo" />

            <h4>Reponame</h4>
          </div>
          <p>Repodesk</p>
        </div>
        <div className="main-search-results__repository-results__result">
          <div className="main-search-results__repository-results__result__title">
            <img src={repositorySVG} alt="repo" />

            <h4>Reponame</h4>
          </div>
          <p>Repodesk</p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkedRepos;
