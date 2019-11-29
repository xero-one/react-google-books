/*Our imports section*/
import React from "react";

export const FormButton = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
    {props.children}
  </button>
);