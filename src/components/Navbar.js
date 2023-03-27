import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import { useState } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <nav>
        <div class="logo">
          <img src="./logo2.png" alt="logo" />
        </div>
        <ul className="links">
          <li>
            <NavLink to="/" onClick={toggleHamburger} exact activeClassName="active">
              Strona Główna
            </NavLink>
          </li>
          <li>
            <NavLink to="/onas" onClick={toggleHamburger} activeClassName="active">
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink to="/oferta" onClick={toggleHamburger} activeClassName="active">
              Oferta
            </NavLink>
          </li>
          <li>
            <NavLink to="/przedszkole" onClick={toggleHamburger} activeClassName="active">
              Przedszkole
            </NavLink>
          </li>
          <li>
            <NavLink to="/aktualnosci" onClick={toggleHamburger} activeClassName="active">
              Aktualności
            </NavLink>
          </li>
          <li>
            <NavLink to="/rekrutacja" onClick={toggleHamburger} activeClassName="active">
              Rekrutacja
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={toggleHamburger} activeClassName="active">
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div class="links-mobile">
          <div className="hamburger" onClick={toggleHamburger}>
            <Burger isOpen={hamburgerOpen} />
          </div>
        </div>
      </nav>
      <style jsx>{`
        @media (max-width: 1507px) {
          nav {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;

            display: flex;

            align-items: center;
            justify-content: center;
            z-index: 12;
            padding: 0;

            
            display: flex;
           
            width: 100%;
            justify-content: space-between;
          }
          nav .links-mobile .hamburger {
            display: flex;

            z-index: 6;
          }
          nav .links-mobile  {
            padding:10px;
          }
          nav .logo  {
            padding:10px;
          }
          nav .links {
            display: ${hamburgerOpen ? "flex" : "none"};
            flex-direction:column;
            top:0;
height:270px;
            padding-top:13px;
            width: 100%;
            background:white;
            position: absolute;
            border-radius: 0px;
            
          }
          nav .links li {
            max-width: 200px;
            margin-left:auto;
            margin-right:auto;
            margin-bottom:5px;
            width:100%
            
          }
          
          nav .links li a {
            
            justify-content: center;
            margin-left:auto;
            margin-right:auto;
          }
        }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
