import React from 'react';
import {NavLink} from 'react-router-dom';




function Navbar(){
  return (
    <div>
      <nav>
      <div class="logo"><img src="./logo2.png"  alt="logo" /></div>
        <div class="links">
          <NavLink   to='/' exact activeClassName="active">Strona Główna</NavLink>
          <NavLink   to='/onas' activeClassName="active">O nas</NavLink>
          <NavLink   to='/oferta' activeClassName="active">Oferta</NavLink>
          <NavLink  to='/przedszkole' activeClassName="active">Przedszkole</NavLink>
          <NavLink   to='/aktualnosci' activeClassName="active">Aktualności</NavLink>
          <NavLink   to='/rekrutacja' activeClassName="active">Rekrutacja</NavLink>
          <NavLink  to='/kontakt' activeClassName="active">Kontakt</NavLink>
          
  
        </div>
        <div class="links-mobile"></div>
      </nav>
    </div>
  );
};
  
export default Navbar;