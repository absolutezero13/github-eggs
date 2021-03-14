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
          <Route path="/github-eggs/user-details/:id" component={UserDetails} />
          <Route path="/github-eggs/repo-details/:id" component={RepoDetails} />
          <Route
            path="/github-eggs/search-bookmarks"
            component={BookmarkedRepos}
          />
          <Route path="/github-eggs/search-users" component={UsersPage} />
          <Route
            exact={true}
            path="/github-eggs"
            component={MainSearchResults}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default SearchResults;
