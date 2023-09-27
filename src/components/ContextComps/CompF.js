import React, { Component } from "react";
import { UserConsumer } from "./SampleContext";

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h2>{username}</h2>;
        }}
      </UserConsumer>
    );
  }
}

export default CompF;
