import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import { useState, useEffect } from "react";


function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const scrollTop = () => {
  //   window.scrollTo({
  //     left:0,
  //     top: 0,
      
  //     behavior: "smooth",
  //   });
  // };

  
  const [shouldScrollTop, setShouldScrollTop] = useState(false);
  

  function handleClick() {
    setShouldScrollTop(true);
  }

  useEffect(() => {
    if (shouldScrollTop) {
      window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
      });
      setShouldScrollTop(false);
    }
  }, [shouldScrollTop]);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const element = document.getElementById('myButton'); // Replace with your element's ID
  //   element.addEventListener('click', scrollToTop);
  //   return () => element.removeEventListener('click', scrollToTop);
  // }, []);


  return (
    <div>
      <nav className={scrollPosition > 15 ? "navbar-scroll" : "navbar"}>
        
      <NavLink onClick={() => handleClick()} to="/">
        <div class="logo">
          <img src="./logo2.png" alt="logo" />
        </div>
        </NavLink>
        <ul className="links">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              exact
              activeClassName="active"
            >
              Strona Główna
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/onas"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/oferta"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              Oferta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/przedszkole"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              Przedszkole
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aktualnosci"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              Aktualności
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rekrutacja"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              Rekrutacja
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galeria"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontakt"
              onClick={() => {
                toggleHamburger();
                handleClick();
              }}
              activeClassName="active"
            >
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
        @media (max-width: 1130px) {
          .strona-glowna{
            padding-top:110px;
          }
          .bar{
            margin-top:110px;
          }
          nav {
            margin-left: 0;
            margin-right: 0;
            border-radius: 0;
            padding: 0.2rem 0.5rem;
            align-items: center;           
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
          nav a .logo  {
           
            width:220px;
          }
          nav a .logo img  {
            
            width:220px;
          }
          nav .links {
            
            flex-direction:column;
            top:0;
            right:0;
            height: auto;
            padding-top:13px;
            width: 100%;
            background:white;
            position: absolute;
            border-radius: 0px;
            box-shadow: inset 0 0 0 #000000, 0 0 0.8em #000000;
            transform:translateY${hamburgerOpen ? "(0)" : "(-500px)"}; 
            transition: all .2s  ;
          }
          nav .links li {
            max-width: 200px;
            margin-left:auto;
            margin-right:auto;
            margin-bottom:5px;
            width:100%;  
          }
          
          nav .links li a {
            
            justify-content: center;
            margin-left:auto;
            margin-right:auto;
            height:50px;
            
           
          }
        }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
