import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Cars from './components/Cars';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';





function App() {
  return (
    <>
      <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path='/cars' element={<Cars />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            

        </Routes>
        <Footer />
      
      
    </>
  );
}

export default App;
