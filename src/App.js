import React from "react";
import Home from "./home";
import Kontakt from "./kontakt";
import Oferta from "./oferta";
import Onas from "./onas";
import Przedszkole from "./przedszkole";
import Rekrutacja from "./rekrutacja";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    
function App () {
  
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        <Route exact path='/kontakt' element={<Kontakt/>} />
        <Route exact path='/oferta' element={<Oferta/>} />
        <Route exact path='/onas' element={<Onas/>} />
        <Route exact path='/przedszkole' element={<Przedszkole/>} />
        <Route exact path='/rekrutacja' element={<Rekrutacja/>} />
        </Routes>
      </Router>
        
        </div>
    
  );
};

export default App;
