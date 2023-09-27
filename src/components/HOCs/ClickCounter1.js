import React, { Component } from "react";
import withCounterHOC from "./withCounterHOC";

export class ClickCounter1 extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCounter = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  render() {
    const { count, incrementCounter } = this.props;
    return (
      <button onClick={incrementCounter}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default withCounterHOC(ClickCounter1);
