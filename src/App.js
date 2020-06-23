import React, { Component } from "react";
import PersonList from "./components/PersonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <div className="top-section">
            <h1>HELLO AXIOS</h1>
          </div>
          <PersonList />
        </div>
      </div>
    );
  }
}


export default App;
