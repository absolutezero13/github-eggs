import React from "react";
import BlankSearchPage from "./Components/BlankSearchPage";
import Header from "./Components/Header";
import "./Sass/main.scss";

const App: React.FC = () => {
  fetch("https://api.github.com/repos/absolutezero13/meerkast")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div className="App">
      <Header />
      <BlankSearchPage />
    </div>
  );
};

export default App;
