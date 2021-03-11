import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookmarkedRepos from "./BookmarkedRepos";
import MainSearchResults from "./MainSearchResults";
import RepoDetails from "./RepoDetails";
import SideBarSearchResults from "./SideBarSearchResults";
import UserDetails from "./UserDetails";
import UsersPage from "./UsersPage";

const SearchResults: React.FC = () => {
  return (
    <div className="search-results">
      <Router>
        <SideBarSearchResults />
        <Switch>
          <Route path="/user-details" component={UserDetails} />
          <Route path="/repo-details" component={RepoDetails} />
          <Route path="/search-bookmarks" component={BookmarkedRepos} />
          <Route path="/search-users" component={UsersPage} />
          <Route path="/" component={MainSearchResults} />
        </Switch>
      </Router>
    </div>
  );
};

export default SearchResults;
