import React from "react";
import repositorySVG from "../Icons/repository.svg";
import repolinkSVG from "../Icons/repolink.svg";
import bookmarkblueSVG from "../Icons/bookmarkblue.svg";
import watchSVG from "../Icons/watch.svg";
import starSVG from "../Icons/star.svg";
import forkSVG from "../Icons/fork.svg";
import branchesSVG from "../Icons/branches.svg";
import issuesSVG from "../Icons/issues.svg";
import pullrequestsSVG from "../Icons/pullrequests.svg";
const SideBarRepoDetails: React.FC = () => {
  return (
    <div className="repo-details-side-bar">
      <div className="repo-details-side-bar__description">
        <img src={repositorySVG} alt="repo" />
        <h2>name/repo</h2>
        <p>Descriptipon sdasdgfgsdfsdfsdfsdgsdgsdfgdsfsdf</p>
        <div className="repo-details-side-bar__description__repo-link">
          <img src={repolinkSVG} alt="repolink" />
          <p>name/repo</p>
        </div>
        <div className="repo-details-side-bar__quantity">
          <div className="repo-details-side-bar__quantity__watch">
            <img src={watchSVG} alt="svg" /> <p className="text">Watch</p>{" "}
            <p className="count"> 1224</p>
          </div>
          <div className="repo-details-side-bar__quantity__star">
            <img src={starSVG} alt="svg" /> <p className="text">Star</p>{" "}
            <p className="count"> 1224</p>
          </div>
          <div className="repo-details-side-bar__quantity__fork">
            <img src={forkSVG} alt="svg" /> <p className="text">Fork</p>{" "}
            <p className="count"> 1224</p>
          </div>
          <div className="repo-details-side-bar__quantity__branches">
            <img src={branchesSVG} alt="svg" /> <p className="text">Branches</p>{" "}
            <p className="count"> 1224</p>
          </div>
          <div className="repo-details-side-bar__quantity__issues">
            <img src={issuesSVG} alt="svg" /> <p className="text">Issues</p>{" "}
            <p className="count"> 1224</p>
          </div>
          <div className="repo-details-side-bar__quantity__pull-requests">
            <img src={pullrequestsSVG} alt="svg" />{" "}
            <p className="text">Pull Requests</p>
            <p className="count"> 1224</p>
          </div>
        </div>
      </div>
      <button className="repo-details-side-bar__button">
        <img src={bookmarkblueSVG} alt="" /> Add to Bookmarks
      </button>
    </div>
  );
};

export default SideBarRepoDetails;
