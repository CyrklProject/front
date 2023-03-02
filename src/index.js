import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration';
import Welcome from './Pages/Welcome';
import Edit from './Pages/Edit';
import { Navbar } from './components/Navbar/Navbar';
import Login from './Pages/Login';
import Matching from './Pages/Matching';
import Deconnexion from './Pages/Deconnexion';
import Invitations from './Pages/Invitations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/invitations" element={<Invitations />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Matching />} />
      <Route path="/deconnexion" element={<Deconnexion />} />
    </Routes>
  </Router>
);

reportWebVitals();
