import React from "react";
import somesvg from "../Icons/repolink.svg";

const SideBarUserDetails: React.FC = () => {
  return (
    <div className="side-bar-user-details">
      <div className="side-bar-user-details__user-information">
        <img src={somesvg} alt="" />
        <h3>fukk name</h3>
        <p>Username</p>
        <p className="side-bar-user-details__user-information__desc">
          USer desc
        </p>
      </div>
    </div>
  );
};

export default SideBarUserDetails;
