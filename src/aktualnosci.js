import React from "react";
import Bar from "./components/Bar";
import './aktualnosci.css';
import { Link } from "react-router-dom";


const Aktualnosci = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Bar title={"Aktualności"} />
      <div className="aktualnosci">
        <div className="aktualnosci-container">
        
          
          <Link to="/rekrutacja"
              onClick={() => {
                handleClick();
              }} ><div className="aktualnosci-item">
            <div className="item-img">
              <img src="./aktualnosci-1.jpg" alt="img"></img>
            </div>
            <div className="item-text">
              <h3>
             Nowa grupa od Września 2025
              </h3>
              <p>Dowiedz się wiecej</p>
            </div>
          </div>
          </Link >
          
        </div>
      </div>
    </div>
  );
};

export default Aktualnosci;
