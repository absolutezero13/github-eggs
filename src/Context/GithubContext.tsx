import React, { createContext, useState } from "react";

type contextType = {
  repos: any;
  users: any;
  searchEverything: any;
  repoCount: any;
  userCount: any;
};

export const GithubContext = createContext<Partial<contextType>>({});

const GithubProvider: React.FC = ({ children }: any) => {
  const [repos, setRepos] = useState();
  const [repoCount, setRepoCount] = useState();
  const [users, setUsers] = useState();
  const [userCount, setUserCount] = useState();
  const searchEverything = (input: string) => {
    fetch(`https://api.github.com/search/repositories?q=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setRepoCount(data.total_count);
        setRepos(data.items);
      });

    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.total_count);
        setUsers(data.items);
      });
  };

  return (
    <GithubContext.Provider
      value={{
        repos,
        users,
        searchEverything,
        repoCount,
        userCount,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
