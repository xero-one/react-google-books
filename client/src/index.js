  
/*Imports section, do not touch*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";



registerServiceWorker();
ReactDOM.render(<App />, document.getElementById("root"));