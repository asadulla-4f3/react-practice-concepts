import React, { Component } from "react";
import withCounterHOC from "./withCounterHOC";

export class HoverCounter1 extends Component {
  render() {
    const { count, incrementCounter } = this.props;

    return <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>;
  }
}

export default withCounterHOC(HoverCounter1);
