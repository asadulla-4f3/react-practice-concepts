/*
 * "createPortal" lets you render some children into a different part of the DOM.
 * Here the other portal is the "portal-root" defined in the html root file.
 */

import React from "react";
import { createPortal } from "react-dom";

function PortalModal() {
  return createPortal(
    <div>PortalModal</div>,
    document.getElementById("portal-root")
  );
}

export default PortalModal;
