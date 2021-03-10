import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainSearchResults from "./MainSearchResults";
import RepoDetailMain from "./RepoDetailMain";
import RepoDetails from "./RepoDetails";
import SideBar from "./SideBar";
import SideBarSearchResults from "./SideBarSearchResults";
import UsersPage from "./UsersPage";

const SearchResults: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="search-results">
        <SideBar />
        <Switch>
          <Route path="/" exact={true} component={MainSearchResults} />
          <Route path="/search-users" exact={true} component={UsersPage} />
          <Route path="/repo-details" exact={true} component={RepoDetailMain} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default SearchResults;
