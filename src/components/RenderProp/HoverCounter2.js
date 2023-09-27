import React, { Component } from "react";

export class HoverCounter2 extends Component {
  render() {
    const { count, incrementCounter } = this.props;

    return <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>;
  }
}

export default HoverCounter2;
