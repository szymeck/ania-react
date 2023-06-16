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
        <Link  onClick={()=> {closeT();handleClick();}} to="/rekrutacja"  ><img src="./logo512.png" alt="logo"></img><h1>Są jeszcze wolne miejsca na dyżur wakacyjny :)</h1></Link>
            <button onClick={()=> props.setTrigger(false)} className="close-btn">Zamknij</button>
            {props.children}
        </div>
      </div>
    ): '';
  };
    
  export default Popup;