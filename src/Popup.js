import React from "react";
import { Link } from "react-router-dom";


function Popup(props){
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function closeT () {
    props.setTrigger(false)
  };
    return (props.trigger) ? (
      <div className="popup">
        
        <div className="popup-inner">
        <Link  onClick={()=> {closeT();handleClick();}} to="/rekrutacja"  ><img src="./logo2.png" alt="logo"></img><h1>Prowadzimy zapisy do nowej grupy dla dzieci od 2,5-3 lat od stycznia 2024.</h1><h2>Rekrutacja dla dzieci w wieku 4-7 lat trwa cały rok.</h2> </Link>
            <button onClick={()=> props.setTrigger(false)} className="close-btn">Zamknij</button>
            {props.children}
        </div>
      </div>
    ): '';
  };
    
  export default Popup;