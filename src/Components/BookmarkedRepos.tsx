import React, { useContext, useEffect, useState } from "react";
import { GithubContext } from "../Context/GithubContext";
import repositorySVG from "../Icons/repository.svg";
const BookmarkedRepos: React.FC = () => {
  const { bookmarkedRepos, dispatch, deleteBookmarkedRepo } = useContext(
    GithubContext
  );

  return (
    <div className="main-search-results bookmarked-repos">
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2>
            {bookmarkedRepos ? bookmarkedRepos.length : 0} Bookmarked Repository
            Results
          </h2>
        </div>
        {bookmarkedRepos &&
          bookmarkedRepos.map((repo: any) => {
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
                <button onClick={() => deleteBookmarkedRepo(repo.id)}>
                  delete bookmark
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BookmarkedRepos;
