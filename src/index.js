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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/calendrier" element={<Calendrier />} />
      <Route path="/listes" element={<Listes />} />
      <Route path="/slides" element={<Slides />} />
      <Route path="/alertes" element={<Alertes />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/deconnexion" element={<Deconnexion />} /> */}
    </Routes>
  </Router>
);

reportWebVitals();
