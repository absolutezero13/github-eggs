import React, { createContext, useEffect, useState, useReducer } from "react";
import { bookmarkedReposReducer } from "./Reducer";
type contextType = {
  repos: Array<object>;
  users: any;
  searchEverything: any;
  repoCount: number;
  userCount: number;
  isSearched: boolean;
  bookmarkedRepos: any;
  dispatch: any;
  deleteBookmarkedRepo: any;
};

export const GithubContext = createContext<Partial<contextType>>({});

const GithubProvider: React.FC = ({ children }: any) => {
  const [repos, setRepos] = useState();
  const [repoCount, setRepoCount] = useState();
  const [users, setUsers] = useState();
  const [userCount, setUserCount] = useState();
  const [isSearched, setSearchPageStatus] = useState(false);
  const [bookmarkedRepos, dispatch] = useReducer(bookmarkedReposReducer, []);

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
    } else {
      setSearchPageStatus(false);
    }
  };

  const deleteBookmarkedRepo = (id: number) => {
    dispatch({
      type: "DELETE_BOOKMARKED",
      id,
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
        isSearched,
        bookmarkedRepos,
        dispatch,
        deleteBookmarkedRepo,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
