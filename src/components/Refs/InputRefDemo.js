/*
 * React.createRef() will create a ref (or can say reference to an element).
 * We can apply the methods like focus, etc on the "current" property of the created Ref.
 */

import React, { Component } from "react";

export class InputRefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // Adding CallBack Ref, refer below:
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this is for normal Ref
    // this.inputRef.current.focus();

    // Adding Callback Ref
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click to Focus</button>
      </div>
    );
  }
}

export default InputRefDemo;
