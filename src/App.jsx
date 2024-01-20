// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './widgets/layout/navbar';
import Heromain from './widgets/layout/heromain';
import Home from './pages/home';
import Tech from "./widgets/layout/page-title"
const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech" element={<Tech />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
