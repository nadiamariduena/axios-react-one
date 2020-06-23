import React, { Component } from "react";
import PersonList from "./components/PersonList";
import PersonInput from "./components/PersonInput";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="page">
            <div className="top-section">
              <h1>HELLO AXIOS</h1>
              <PersonInput />
              <PersonList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
