import React from "react";
import SideBarUserDetails from "./SideBarUserDetails";
import UserDetailMain from "./UserDetailMain";

const UserDetails: React.FC = () => {
  return (
    <div>
      <SideBarUserDetails />
      <UserDetailMain />
    </div>
  );
};

export default UserDetails;
