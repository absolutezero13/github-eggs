import React from "react";
import repositorySVG from "../Icons/repository.svg";
const MainSearchResults: React.FC = () => {
  return (
    <div className="main-search-results">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2>2343 Repository Results</h2>
        </div>
        <div className="main-search-results__repository-results__result">
          <div className="main-search-results__repository-results__result__title">
            <img src={repositorySVG} alt="repo" />
            <h4>airbnb/lottie-android</h4>
          </div>

          <p>Render After Effects Animations natively on your computer</p>
        </div>
      </div>
    </div>
  );
};

export default MainSearchResults;
