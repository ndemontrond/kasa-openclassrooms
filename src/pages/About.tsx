// src/components/About.tsx
//import React from 'react';
import kasaLogo from '../assets/LOGO.svg';


const About = () => {
  return (
    <div>
      <img src={kasaLogo} className="logo" alt="Kasa logo" />
      <h2>About</h2>
      <p>This is the about page content.</p>
    </div>
  );
};

export default About;