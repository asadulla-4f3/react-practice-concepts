import React, { Component } from "react";
import CompF from "./CompF";
import sampleContext from "./SampleContext";

class CompE extends Component {
  static contextType = sampleContext;
  render() {
    return (
      <div>
        <h2>Hi this is context {this.context}</h2>
        <CompF />
      </div>
    );
  }
}

// CompE.contextType = sampleContext;

export default CompE;
