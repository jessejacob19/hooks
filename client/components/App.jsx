import React, { Component } from "react";

import Example from "./Example";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

export default App;
