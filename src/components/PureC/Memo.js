/*
 * This memo concept of React is applicable for Functional Components.
 * It is an alternative to Pure components in Class Components.
 * This feature was introduced after React version 16.6.
 * Make sure the React version should be 16.6 or above.
 */

import React from "react";

function Memo({ name }) {
  console.log("Memo comp");
  return <div>Memo {name}</div>;
}

export default React.memo(Memo);
