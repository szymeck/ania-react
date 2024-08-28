"use client"
import React from "react";
import Home from "./home";
import Kontakt from "./kontakt";
import Oferta from "./oferta";
import Onas from "./onas";
import Przedszkole from "./przedszkole";
import Aktualnosci from "./aktualnosci";
import Rekrutacja from "./rekrutacja";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./galeria";
import Dzienotwarty from "./dzienotwarty";


import '../node_modules/font-awesome/css/font-awesome.min.css'; 
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
        <Route exact path='/galeria' element={<Galeria/>} />
        <Route exact path='/aktualnosci' element={<Aktualnosci/>} />
        <Route exact path='/dzienotwarty' element={<Dzienotwarty/>} />
        
        </Routes>
        
        <Footer/>
        
      </Router>
        
        </div>
    
  );
};

export default App;
