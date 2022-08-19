import React, { useState } from 'react';
import './Registration.css';
import Banner from '../components/Banner/Banner';

export default function Registration() {
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="registration-body">
      <Banner />
      <div className="registration-background">
        <div className="registration-title">S&apos;inscrire</div>
        <div className="registration-form">
          <form>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="Nom"
            />
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="Prénom"
            />
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="Mail"
            />
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="Téléphone"
            />
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="Mot de passe"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
