import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import WeightGain from './Weightgain'; // Assuming you have a WeightGain.js file
import WeightLoss from './Weightloss'; // Assuming you have a WeightLoss.js file

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/weight-gain" element={<WeightGain />} />
      <Route path="/weight-loss" element={<WeightLoss />} />
    </Routes>
  </Router>
);

// Use createRoot from 'react-dom/client'
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<Root />);
