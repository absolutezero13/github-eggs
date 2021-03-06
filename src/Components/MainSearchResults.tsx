import React, { useContext, useEffect } from "react";
import { GithubContext } from "../Context/GithubContext";
import repositorySVG from "../Icons/repository.svg";
import { Link } from "react-router-dom";
import SideBarSearchResults from "./SideBarSearchResults";
const MainSearchResults: React.FC = () => {
  const { repos, repoCount } = useContext(GithubContext);
  console.log(repos);
  return (
    <div className="main-search-results">
      <SideBarSearchResults />
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2> {repoCount ?? 0} Repository Results</h2>
        </div>

        {repos &&
          repos.map((repo: any) => {
            return (
              <Link key={repo.id} to={`/github-eggs/repo-details/${repo.id}`}>
                <div className="main-search-results__repository-results__result">
                  <div className="main-search-results__repository-results__result__title">
                    <img src={repositorySVG} alt="repo" />

                    <h4>{repo.name}</h4>
                  </div>
                  <p>{repo.description}</p>
                </div>{" "}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MainSearchResults;
