// index.js

import React from 'react';
import ReactDOM from 'react-dom';
// import LocomotiveScrollWrapper from './LocomotiveScrollWrapper';
import App from './App';
import '../public/css/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LocomotiveScrollWrapper> */}
      <App className="font-serif" />
    {/* </LocomotiveScrollWrapper> */}
  </React.StrictMode>
);
