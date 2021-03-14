import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../Context/GithubContext";
import SideBarSearchResults from "./SideBarSearchResults";
const UsersPage: React.FC = () => {
  const { users, userCount } = useContext(GithubContext);
  return (
    <div className="main-search-results">
      <SideBarSearchResults />
      <div className="main-search-results__repository-results">
        <div className="main-search-results__repository-results__title">
          <h2>{userCount ?? 0} User Results</h2>
        </div>
        {users &&
          users.map((user: any) => {
            return (
              <div
                key={user.id}
                className="main-search-results__repository-results__result"
              >
                <div className="main-search-results__repository-results__result__title">
                  <img
                    className="user-picture"
                    src={user.avatar_url}
                    alt="user"
                  />
                  <Link to={`/github-eggs/user-details/${user.id}`}>
                    <h4>{user.login}</h4>
                  </Link>
                </div>
                <p>{user.type}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UsersPage;
