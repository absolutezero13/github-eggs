import React, { useEffect, useState } from "react";
import repositorySVG from "../Icons/repository.svg";
const BookmarkedRepos: React.FC = () => {
  const [repos, setRepos] = useState<any>();
  useEffect(() => {
    const repos = JSON.parse(localStorage.getItem("bookmarkedRepos")!);
    if (repos) {
      setRepos(repos);
    }
  }, []);

  return (
    <div className="main-search-results bookmarked-repos">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2> {repos ? repos.length : 0} Bookmarked Repository Results</h2>
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
                  <h4> {repo.full_name} </h4>
                </div>
                <p> {repo.description} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BookmarkedRepos;
