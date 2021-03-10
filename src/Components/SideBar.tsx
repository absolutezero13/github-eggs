import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RepoDetailsSideBar from "./RepoDetailsSideBar";
import SideBarSearchResults from "./SideBarSearchResults";

const SideBar: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={SideBarSearchResults} />
        <Route
          path="/repo-details"
          exact={true}
          component={RepoDetailsSideBar}
        />
      </div>
    </Router>
  );
};

export default SideBar;
