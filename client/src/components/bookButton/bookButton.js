/*Our imports section*/
import React from "react";
import "./bookButton.css";

const BookButton = props => (
  <button className={`book-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default BookButton;