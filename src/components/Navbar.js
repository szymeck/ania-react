import React from 'react';
import {Link} from 'react-router-dom';




function Navbar(){
  return (
    <div>
      <nav>
      <div class="logo"><img src="./logo2.png"  alt="logo" /></div>
        <div class="links">
          <button><Link  to='/'>Strona Główna</Link></button>
          <button><Link  to='/onas'>O nas</Link></button>
          <button><Link to='/kontakt'>Kontakt</Link></button>
          <button><Link  to='/oferta'>Oferta</Link></button>
          <button>Kontakt</button>
        </div>
        <div class="links-mobile"></div>
      </nav>
    </div>
  );
};
  
export default Navbar;