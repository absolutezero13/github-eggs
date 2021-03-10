import React, { useContext } from "react";
import { GithubContext } from "../Context/GithubContext";
import repositorySVG from "../Icons/repository.svg";
import { Link } from "react-router-dom";
const MainSearchResults: React.FC = () => {
  const { repos, repoCount } = useContext(GithubContext);

  return (
    <div className="main-search-results">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2> {repoCount ?? 0} Repository Results</h2>
        </div>

        {repos &&
          repos.map((repo: any) => {
            return (
              <div
                key={repo.id}
                className="main-search-results__repository-results__result"
              >
                <div className="main-search-results__repository-results__result__title">
                  <img src={repositorySVG} alt="repo" />
                  <Link to="/repo-details">
                    <h4>{repo.name}</h4>
                  </Link>
                </div>
                <p>{repo.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainSearchResults;
