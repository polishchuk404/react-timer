import React, { Component } from "react";
import Timer from "./components/timer";

class App extends Component {
   onTick = () => this.state.time;
   render() {
      return(
         <Timer time = {3600} step = {1} onTick={(state) => state.count}  />
      )
   }
}
  
export default App;