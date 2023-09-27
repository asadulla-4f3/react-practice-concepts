import React, { Component } from "react";
import LifecycleA from "./LifecycleA";
import ParentComp from "./PureC/ParentComp";
import InputRefDemo from "./Refs/InputRefDemo";
import FocusInput from "./Refs/FocusInput";
import FRParentInput from "./Refs/FRParentInput";
import Hero from "./ErrorBoundaries/Hero";
import ErrorBoundary from "./ErrorBoundaries/ErrorBoundary";
import ClickCounter1 from "./HOCs/ClickCounter1";
import HoverCounter1 from "./HOCs/HoverCounter1";
import RenderProps from "./RenderProp/RenderProps";
import ClickCounter2 from "./RenderProp/ClickCounter2";
import HoverCounter2 from "./RenderProp/HoverCounter2";

class Home extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       message: "Home",
  //     };

  //     // this.clickHandler = this.clickHandler.bind(this);
  //   }

  //   clickHandler() {
  //     this.setState({
  //       message: "Office",
  //     });
  //     console.log(this);
  //   }

  //   clickHandler = () => {
  //     this.setState({
  //       message: "Office",
  //     });
  //     console.log(this);
  //   };

  render() {
    return (
      <>
        {/* <h2>{this.state.message}</h2> */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* <LifecycleA /> */}
        {/* <ParentComp /> */}
        {/* <InputRefDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}

        {/* *******Below code is related to HOC's******* */}
        {/* <ClickCounter1 name="Asadulla" />
        <HoverCounter1 /> */}

        {/* *******Below code is related to Render props******* */}
        <RenderProps
          render={(count, incrementCounter) => (
            <ClickCounter2 count={count} incrementCounter={incrementCounter} />
          )}
        />

        <RenderProps
          render={(count, incrementCounter) => (
            <HoverCounter2 count={count} incrementCounter={incrementCounter} />
          )}
        />
      </>
    );
  }
}

export default Home;
