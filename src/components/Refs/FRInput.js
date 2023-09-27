import React, { Component } from "react";

// class FRInput extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }

const FRInput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default FRInput;
