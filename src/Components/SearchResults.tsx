import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainSearchResults from "./MainSearchResults";
import SideBarSearchResults from "./SideBarSearchResults";
import UsersPage from "./UsersPage";

const SearchResults: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="search-results">
        <SideBarSearchResults />
        <Switch>
          <Route
            path="/search-results"
            exact={true}
            component={MainSearchResults}
          />
          <Route path="/search-users" exact={true} component={UsersPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default SearchResults;
