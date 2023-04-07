import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, NavLink, BrowserRouter} from 'react-router-dom';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import Team from './components/pages/Team';
import Home from './components/pages/Home';
import {motion, AnimatePresence} from 'framer-motion';
import LocationProvider from './components/LocationProvider';
import { RoutesWithInAnimation } from './components/RoutesWithInAnimation';

function App() {
  const routerVariants = {
    initial : {
      y : '100vh'
    },
    final : {
      y : '0vh'
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatePresence>
      <Header/>
      <LocationProvider>
        <RoutesWithInAnimation/>
      </LocationProvider>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> */}
      </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
