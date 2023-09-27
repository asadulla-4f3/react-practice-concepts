/*
 * A Pure component does implement the shouldComponentUpdate method with a shallow props and state comparison.
 */

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure comp render");
    return <div>PureComp {this.props.name}</div>;
  }
}

export default PureComp;
