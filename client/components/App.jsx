import React, { Component } from "react";

import Example from "./Example";
import EffectHook from "./EffectHook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Example />
        <p>next</p>
        <EffectHook />
      </div>
    );
  }
}

export default App;
