import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Practice from './pages/Practice';
import Home from "./pages/Home";
import Learn from './pages/Learn';
import Planning from './pages/Planning';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/learn' element={<Learn/>} />
              <Route path='/practice' element={<Practice />} />
              <Route path='/planning' element={<Planning />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
