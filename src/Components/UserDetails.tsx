import React from "react";
import SideBarUserDetails from "./SideBarUserDetails";
import UserDetailMain from "./UserDetailMain";

const UserDetails: React.FC = () => {
  return (
    <div className="user-details">
      <SideBarUserDetails />
      <UserDetailMain />
    </div>
  );
};

export default UserDetails;
