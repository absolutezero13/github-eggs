import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../Context/GithubContext";
import repositorySVG from "../Icons/repository.svg";
import SideBarSearchResults from "./SideBarSearchResults";
const BookmarkedRepos: React.FC = () => {
  const { bookmarkedRepos, dispatch, deleteBookmarkedRepo } = useContext(
    GithubContext
  );

  console.log(bookmarkedRepos);
  return (
    <div className="main-search-results bookmarked-repos">
      <SideBarSearchResults />
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
                  <Link to={`/github-eggs/repo-details/${repo.id}`}>
                    <h4> {repo.full_name} </h4>
                  </Link>
                </div>
                <p> {repo.description} </p>
                <button
                  className="bookmarked-delete-button button-delete"
                  onClick={() => deleteBookmarkedRepo(repo.id)}
                >
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
