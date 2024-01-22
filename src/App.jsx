  // App.js

  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
  import "./App.css"
  import Tech from "./widgets/layout/page-title";
import CustomCursor from "./widgets/layout/CustomCursor"
import UIUX from "./pages/UIUX/home.jsx"
  const App = () => {
    return (
      <Router>
        <div className=''>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UI&UX-Design" element={<UIUX />} />

            <Route path="/Tech" element={<Tech />} />

          </Routes>
             <CustomCursor />
        </div>
      </Router>
    );
  };

  export default App;
