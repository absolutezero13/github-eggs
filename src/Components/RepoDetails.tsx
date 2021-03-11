import React from "react";
import RepoDetailMain from "./RepoDetailMain";
import SideBarRepoDetails from "./SideBarRepoDetails";

const RepoDetails = (props: any) => {
  console.log(props);
  return (
    <div className="repo-details">
      <SideBarRepoDetails />
      <RepoDetailMain />
    </div>
  );
};

export default RepoDetails;
