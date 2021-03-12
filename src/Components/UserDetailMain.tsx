import React from "react";
import svg from "../Icons/repository.svg";

interface UserDetailMainProps {
  id: number;
}

const UserDetailMain: React.FC<UserDetailMainProps> = ({ id }) => {
  return (
    <div className="user-detail-main">
      <div className="user-detail-main__title">
        <h3>Repositories </h3>
        <div className="user-detail-main__title__number-box">55</div>
      </div>
      <div className="user-detai-main__repos">
        <div>
          <img src={svg} alt="repo" />
          <h4>repo/name {id}</h4>
        </div>
        <p>repo desc</p>
      </div>
    </div>
  );
};

export default UserDetailMain;
