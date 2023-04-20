import logo from './logo.svg';
import './App.css';

import React, {useState, useRef, useEffect } from 'react';


import { BrowserRouter ,Routes ,Route ,Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';


function App() {
  return (
    <BrowserRouter>
  <div>
  <Link to='/'>Home</Link>
  <Link to='/esign'>Esign</Link>
  </div>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/product/:_id' element={<DetailPage/>} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;


