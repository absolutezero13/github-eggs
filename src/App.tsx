import React from "react";
import BlankSearchPage from "./Components/BlankSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import UsersPage from "./Components/UsersPage";
import RepoDetails from "./Components/RepoDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={BlankSearchPage} />
          <Route path="/search" exact={true} component={SearchResults} />
          <Route path="/repo-details" exact={true} component={RepoDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
