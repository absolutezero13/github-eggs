import React from "react";
import { Route, Switch } from "react-router";
import MainSearchResults from "./MainSearchResults";
import SideBarSearchResults from "./SideBarSearchResults";

const SearchResults = () => {
  return (
    <div className="search-results">
      <SideBarSearchResults />
      <Switch>
        <Route path="/" component={MainSearchResults} />
      </Switch>
    </div>
  );
};

export default SearchResults;
