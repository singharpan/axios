import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiCall from "./apicall";

function App() {
  // fetch("https://www.reddit.com/r/space.json")
  //   .then((res) => res.json())
  //   .then((res2) => console.log(res2.data.children));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ApiCall />
    </div>
  );
}

export default App;
