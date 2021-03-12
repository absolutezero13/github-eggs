import React, { createContext, useState } from "react";

type contextType = {
  repos: Array<object>;
  users: any;
  searchEverything: any;
  repoCount: number;
  userCount: number;
  isSearched: boolean;
};

export const GithubContext = createContext<Partial<contextType>>({});

const GithubProvider: React.FC = ({ children }: any) => {
  const [repos, setRepos] = useState();
  const [repoCount, setRepoCount] = useState();
  const [users, setUsers] = useState();
  const [userCount, setUserCount] = useState();
  const [isSearched, setSearchPageStatus] = useState(false);
  const searchEverything = (input: string) => {
    if (input.length > 2) {
      setSearchPageStatus(true);
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
    }
  };

  return (
    <GithubContext.Provider
      value={{
        repos,
        users,
        searchEverything,
        repoCount,
        userCount,
        isSearched,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
