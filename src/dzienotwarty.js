import React from "react";
import Bar from "./components/Bar";
import "./dzienotwarty.css";

function Dzienotwarty() {
    return (
      <div>
        <Bar title={"Dzień otwarty"} />
  
        <div className="plakat">
        <img src="./plakat-2.jpg" alt="plakat"></img>
        </div>
      </div>
    );
  }
  
  export default Dzienotwarty;