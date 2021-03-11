import React from "react";
import MainSearchPage from "./Components/MainSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainSearchPage />
    </div>
  );
};

export default App;
