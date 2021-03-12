import React, { useContext, useEffect, useState } from "react";
import { GithubContext } from "../Context/GithubContext";
import somesvg from "../Icons/repolink.svg";

interface SideBarUserDetailProps {
  id: number;
}
const SideBarUserDetails: React.FC<SideBarUserDetailProps> = ({ id }) => {
  const { users } = useContext(GithubContext);
  const user = users?.find((e: any) => {
    return e.id == id;
  });
  const [userDetails] = useState(user);
  const { avatar_url, login, html_url, type } = userDetails;

  return (
    <div className="side-bar-user-details">
      {userDetails && (
        <div className="side-bar-user-details__user-information">
          <img src={avatar_url} alt="" />
          <h3>{login} </h3>
          <p>{html_url}</p>
          <p className="side-bar-user-details__user-information__desc">
            {type}
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBarUserDetails;
