import React from "react";
import SideBarUserDetails from "./SideBarUserDetails";
import UserDetailMain from "./UserDetailMain";

const UserDetails: React.FC = (props: any) => {
  return (
    <div className="user-details">
      <SideBarUserDetails id={props.match.params.id} />
      <UserDetailMain id={props.match.params.id} />
    </div>
  );
};

export default UserDetails;
