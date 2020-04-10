import React, { Component } from "react";
import Timer from "./components/timer";

class App extends Component {
   render() {
      return(
         <Timer time = {3600} step = {1} autostart  />
      )
   }
}
  
export default App;