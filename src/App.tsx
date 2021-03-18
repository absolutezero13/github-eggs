import React from "react";
import MainSearchPage from "./Components/MainSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainSearchPage />
      </div>
    </BrowserRouter>
  );
};

export default App;
