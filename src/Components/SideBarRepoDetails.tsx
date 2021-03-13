import React, { useContext, useEffect, useState } from "react";
import repositorySVG from "../Icons/repository.svg";
import repolinkSVG from "../Icons/repolink.svg";
import bookmarkblueSVG from "../Icons/bookmarkblue.svg";
import bookmarkSVG from "../Icons/bookmark.svg";
import watchSVG from "../Icons/watch.svg";
import starSVG from "../Icons/star.svg";
import forkSVG from "../Icons/fork.svg";
import branchesSVG from "../Icons/branches.svg";
import issuesSVG from "../Icons/issues.svg";
import pullrequestsSVG from "../Icons/pullrequests.svg";
import { GithubContext } from "../Context/GithubContext";

interface SideBarRepoDetailsProps {
  id: number;
}

const SideBarRepoDetails: React.FC<SideBarRepoDetailsProps> = ({ id }) => {
  const { repos } = useContext(GithubContext)!;
  const [repo, setRepo] = useState<any>();
  const [branchCount, setBranchCount] = useState();
  const [pullRequestCount, setPullRequestCount] = useState();
  const [isBookmarked, setBookmarkedStatus] = useState<boolean>();

  useEffect(() => {
    const repo = repos?.find((e: any) => {
      return e.id == id;
    })!;

    setRepo(repo);
  }, []);

  useEffect(() => {
    if (repo) {
      fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/branches`
      )
        .then((res) => res.json())
        .then((branches) => setBranchCount(branches.length));
    }
  });
  useEffect(() => {
    if (repo) {
      fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/pulls`
      )
        .then((res) => res.json())
        .then((branches) => setPullRequestCount(branches.length));
    }
  });

  const { bookmarkedRepos, dispatch } = useContext(GithubContext);

  const addBookmarkedRepo = () => {
    dispatch({
      type: "ADD_BOOKMARKED",
      repo,
    });

    setBookmarkedStatus(true);
  };

  const deleteBookmarkedRepo = (id: number) => {
    dispatch({
      type: "DELETE_BOOKMARKED",
      id,
    });
    setBookmarkedStatus(false);
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedRepos", JSON.stringify(bookmarkedRepos));
  }, [bookmarkedRepos]);
  console.log(repo ? repo.id : null);
  return (
    <div className="repo-details-side-bar">
      {repo ? (
        <div className="repo-details-side-bar__description">
          <img src={repositorySVG} alt="repo" />
          <h2> {repo.name} </h2>
          <p> {repo.owner.login} </p>
          <div className="repo-details-side-bar__description__repo-link">
            <img src={repolinkSVG} alt="repolink" />
            <p> {repo.name} </p>
          </div>
          <div className="repo-details-side-bar__quantity">
            <div className="repo-details-side-bar__quantity__watch">
              <img src={watchSVG} alt="svg" /> <p className="text">Watch</p>
              <p className="count"> {repo.watchers_count} </p>
            </div>
            <div className="repo-details-side-bar__quantity__star">
              <img src={starSVG} alt="svg" /> <p className="text">Star</p>
              <p className="count"> {repo.stargazers_count} </p>
            </div>
            <div className="repo-details-side-bar__quantity__fork">
              <img src={forkSVG} alt="svg" /> <p className="text">Fork</p>
              <p className="count">{repo.forks_count}</p>
            </div>
            <div className="repo-details-side-bar__quantity__branches">
              <img src={branchesSVG} alt="svg" />
              <p className="text">Branches</p>
              <p className="count">{branchCount}</p>
            </div>
            <div className="repo-details-side-bar__quantity__issues">
              <img src={issuesSVG} alt="svg" /> <p className="text">Issues</p>
              <p className="count">{repo.open_issues_count}</p>
            </div>
            <div className="repo-details-side-bar__quantity__pull-requests">
              <img src={pullrequestsSVG} alt="svg" />
              <p className="text">Pull Requests</p>
              <p className="count">{pullRequestCount}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {isBookmarked ? (
        <button
          onClick={() => deleteBookmarkedRepo(repo.id)}
          className="repo-details-side-bar__button button-delete"
        >
          <img src={bookmarkSVG} alt="" /> Delete From Bookmarks
        </button>
      ) : (
        <button
          onClick={addBookmarkedRepo}
          className="repo-details-side-bar__button"
        >
          <img src={bookmarkblueSVG} alt="" /> Add to Bookmarks
        </button>
      )}
    </div>
  );
};

export default SideBarRepoDetails;
