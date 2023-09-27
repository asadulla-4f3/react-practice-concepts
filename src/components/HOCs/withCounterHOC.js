import React, { Component } from "react";

const withCounterHOC = (WrappedComponent) => {
  class WithCounterHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }

  return WithCounterHOC;
};

export default withCounterHOC;
