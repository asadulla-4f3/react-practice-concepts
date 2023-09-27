import React, { Component } from "react";

export class ClickCounter2 extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <button onClick={incrementCounter}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default ClickCounter2;
