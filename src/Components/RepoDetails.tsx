import React from "react";
import RepoDetailMain from "./RepoDetailMain";
import SideBarRepoDetails from "./SideBarRepoDetails";

const RepoDetails = (props: any) => {
  return (
    <div className="repo-details">
      <SideBarRepoDetails id={props.match.params.id} />
      <RepoDetailMain id={props.match.params.id} />
    </div>
  );
};

export default RepoDetails;
