import React, { Component } from "react";

export class Hero extends Component {
  render() {
    const { name } = this.props;
    if (name === "Joker") {
      throw new Error("Joker is not Hero!");
    }
    return <div>{name}</div>;
  }
}

export default Hero;
