import React from "react";

const UserDetailMain = () => {
  return (
    <div className="user-detail-main">
      <div className="user-detail-main__title">
        <h3>Repositories</h3>
        <div className="user-detail-main__title__number-box">55</div>
      </div>
      <div className="user-detai-main__repos">
        <div>
          <img src="" alt="repo" />
          <h4>repo/name</h4>
        </div>
        <p>repo desc</p>
      </div>
    </div>
  );
};

export default UserDetailMain;
