import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import Memo from "./Memo";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Asadulla",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Asadulla",
      });
    }, 2000);
  }

  render() {
    console.log("*****************Parent comp render**************");
    return (
      <>
        <div>ParentComp {this.state.name}</div>
        <Memo name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </>
    );
  }
}

export default ParentComp;
