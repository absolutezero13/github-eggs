import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  useCallback,
} from "react";

import { bookmarkedReposReducer } from "./Reducer";
type contextType = {
  repos: Array<object>;
  users: any;
  searchEverything: any;
  repoCount: number;
  userCount: number;
  isSearched: boolean;
  bookmarkedRepos: Array<object>;
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

  useEffect(() => {
    const repos = JSON.parse(localStorage.getItem("bookmarkedRepos")!);
    console.log(repos);
    if (repos) {
      dispatch({
        type: "GET_BOOKMARKED_REPOS",
        repos,
      });
    }
  }, []);

  const searchEverything = async (input: string) => {
    if (input.length > 2) {
      setSearchPageStatus(true);
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${input}`
      );
      const data = await res.json();
      setRepoCount(data.total_count);
      setRepos(data.items);
      const res2 = await fetch(
        `https://api.github.com/search/users?q=${input}`
      );
      const data2 = await res2.json();
      setUserCount(data2.total_count);
      setUsers(data2.items);
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
