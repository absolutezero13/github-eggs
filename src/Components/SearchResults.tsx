import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainSearchResults from "./MainSearchResults";
import RepoDetails from "./RepoDetails";

import SideBarSearchResults from "./SideBarSearchResults";
import UsersPage from "./UsersPage";

const SearchResults = () => {
  return (
    <div className="search-results">
      <Router>
        <SideBarSearchResults />
        <Switch>
          <Route path="/repo-details" component={RepoDetails} />
          <Route path="/search-users" component={UsersPage} />
          <Route path="/" component={MainSearchResults} />
        </Switch>
      </Router>
    </div>
  );
};

export default SearchResults;
