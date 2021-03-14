import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../Context/GithubContext";
import svg from "../Icons/repository.svg";

interface UserDetailMainProps {
  id: number;
}

const UserDetailMain: React.FC<UserDetailMainProps> = ({ id }) => {
  const { users } = useContext(GithubContext);
  const user = users?.find((e: any) => {
    return e.id == id;
  });
  const [userDetails] = useState(user);
  const [userRepos, setUserRepos] = useState<Array<object>>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userDetails.login}/repos`)
      .then((res) => res.json())
      .then((repos) => setUserRepos(repos));
  }, []);

  return (
    <div className="user-detail-main">
      {userRepos ? (
        <div>
          <div className="user-detail-main__title">
            <h3>Repositories </h3>
            <div className="user-detail-main__title__number-box">
              {userRepos.length}
            </div>
          </div>
          {userRepos.map((repo: any) => {
            return (
              <div key={repo.id} className="user-detail-main__repo">
                <div className="user-detail-main__repo__repo-title">
                  <img src={svg} alt="repo" />
                  <h4> {repo.name} </h4>
                </div>
                <p>{repo.description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default UserDetailMain;
