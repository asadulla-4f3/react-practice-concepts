/*
 * A Regular component does not implement the shouldComponentUpdate method.
 * It always returns true by default.
 */

import React, { Component } from "react";
export class RegComp extends Component {
  render() {
    console.log("Regular comp render");
    return <div>RegComp {this.props.name}</div>;
  }
}

export default RegComp;
