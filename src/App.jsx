import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './views/admin/adminLogin';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<AdminLogin />} />
      </Routes>
    </div>
  </Router>
);

export default App;
