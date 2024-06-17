import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import Navbar1 from './layouts/Navbar1';
import Footer1 from './layouts/Footer1';
import Registrate from './components/Registrate';
import Acerca from './components/Acerca';
import Compra from './components/Compra';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar1 />}>
            <Route index element={<Home />} />
            <Route path='Menu' element={<Menu />} />
            <Route path='Registrate' element={<Registrate />} />
            <Route path='Contactos' element={<Contactos />} />
            <Route path='Acerca' element={<Acerca />} />
            <Route path='Compra' element={<Compra />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer1 />
    </div>
  );
}

export default App;
