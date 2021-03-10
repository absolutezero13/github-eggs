import React from "react";
import BlankSearchPage from "./Components/BlankSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RepoDetails from "./Components/RepoDetails";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={BlankSearchPage} exact={true} />
          <Route path="/repo-details" component={RepoDetails} exact={true} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
