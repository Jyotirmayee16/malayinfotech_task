import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Details from './Components/Details';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member-details" element={<Details />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
