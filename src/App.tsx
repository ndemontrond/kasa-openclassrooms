// import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/CSS/app.css"; // Import your global SCSS file
import Home from "./pages/Home"; // Import your Home component
import About from "./pages/About"; // Import your About component
import Header from "./components/header";
import Footer from "./components/footer";
import NoMatch from "./pages/NoMatch";
import SelectedCard from "./components/selectedcard";

function App() {
    return (
        <React.Fragment>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/card/:cardId" element={<SelectedCard />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>

            <Footer />
        </React.Fragment>
    );
}

export default App;
