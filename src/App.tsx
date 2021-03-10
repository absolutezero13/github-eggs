import React from "react";
import BlankSearchPage from "./Components/BlankSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RepoDetails from "./Components/RepoDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BlankSearchPage />
    </div>
  );
};

export default App;
