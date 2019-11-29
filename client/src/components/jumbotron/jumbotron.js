import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div 
      style={{ height: 160, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center"}}
      className="container" id="jumbotron">
      {children}
    </div>
  </div>
);

export default Jumbotron;
