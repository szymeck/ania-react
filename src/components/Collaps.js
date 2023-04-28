import React, { useState } from "react";

function Collaps(props) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collaps">
        <div className="menu">
        <div className="icon"><img src={props.icon} alt="icons"></img></div>
      <div className="title">{props.label}</div>
        </div>
      
      <button className="toggle" onClick={() => {setIsOpen(!isOpen);handleClick()}}>
       {active ? "Zwiń" : "Rozwiń"}
      </button>
      <div className={isOpen ? "content-parent show" : "content-parent"}>
      <div className={"content"}>{props.children}</div>
    </div>
    </div>
  );
}

export default Collaps;
