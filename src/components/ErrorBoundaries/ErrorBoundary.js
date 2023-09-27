/*
 * A component will become an Error Boundary if that component consists of either or both these methods.
 * Those are "static getDerivedStateFromError" and "componentDidCatch"
 */

import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMsg: "",
    };
  }
  static getDerivedStateFromError(error) {
    // This method is used to return the new state.
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, info) {
    // This method is used to log errors
    console.log(err);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
