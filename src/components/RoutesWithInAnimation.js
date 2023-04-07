import React from 'react';
import {useLocation, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';

export const RoutesWithInAnimation = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}
