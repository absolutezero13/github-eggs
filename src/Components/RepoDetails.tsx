import React from "react";
import RepoDetailMain from "./RepoDetailMain";
import RepoDetailsSideBar from "./RepoDetailsSideBar";

const RepoDetails = () => {
  return (
    <div className="repo-details">
      <RepoDetailsSideBar />
      <RepoDetailMain />
    </div>
  );
};

export default RepoDetails;
