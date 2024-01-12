//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import AppRouter from './Router';
import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component

//import reactLogo from './assets/react.svg';
//import viteLogo from './assets/vite.svg';

import './App.css';
import './styles.scss';

function App() {
  return (
    <Router>
      {/**<div>
        <Link to="/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <Route path="/user/:id" element={<User />} />
      <div className="card">
        <AppRouter />
      </div>*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      

      </Routes>
    </Router>
  );
}

export default App;