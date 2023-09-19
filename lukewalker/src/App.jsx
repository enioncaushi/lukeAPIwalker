import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import DropdownMenu from './components/DropdownMenu';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DropdownMenu />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
      </Routes>
    </Router>
  );
}

export default App;
