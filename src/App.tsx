import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/CSS/app.css'; // Import your global SCSS file
import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component
import Header from './components/header';
import Footer from "./components/footer";
import SelectedCard from './components/selectedcard'; 

function App() {

  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:cardId" element={<SelectedCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
