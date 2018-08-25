import * as React from "react";

import { Game } from "./components/game/Game";

import "./app.css";

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <h1>Tower of Hanoi</h1>
        <Game />
      </div>
    );
  }
}

export default App;
