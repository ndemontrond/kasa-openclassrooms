import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/app.scss'; // Import your global SCSS file
import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component
import Header from './components/header';

import logementlist from './components/logementlist';
import logementdetail from './components/logementdetail'; 


const logementData = [
  { id: 1, name: 'Appartement A' },
  { id: 2, name: 'Maison B' },
];


function App() {

  return (

      <div className='app-container'>
        <Header />




      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path="/logement" element={<logementlist logementData={logementData} />} />
          <Route path="/logement/:id" element={<logementdetail />} />
        </Routes>
        </div>

      
  );
}

export default App;
