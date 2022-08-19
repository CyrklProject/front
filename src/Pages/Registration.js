import React, { useState } from 'react';
import './Registration.css';
import Banner from '../components/Banner/Banner';
import Button from '../components/Button/Button';

export default function Registration() {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [mail, setMail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mdp, setMdp] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleTelephone = (e) => {
    setTelephone(e.target.value);
  };
  const handleMdp = (e) => {
    setMdp(e.target.value);
  };
  return (
    <div className="registration-body">
      <Banner />
      <div className="registration-background">
        <div className="registration-content-left">
          <div className="color-block"></div>
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
                onChange={handleFirstname}
                className="input"
                value={firstname}
                type="text"
                placeholder="Prénom"
              />
              <input
                onChange={handleMail}
                className="input"
                value={mail}
                type="text"
                placeholder="Mail"
              />
              <input
                onChange={handleTelephone}
                className="input"
                value={telephone}
                type="text"
                placeholder="Téléphone"
              />
              <input
                onChange={handleMdp}
                className="input"
                value={mdp}
                type="text"
                placeholder="Mot de passe"
              />
            </form>
            <Button className="button-registration">S&apos;inscrire</Button>
          </div>
        </div>
        <div className="reg-content-right">
          <p className="reg-content-para-right">DÉJEUNEZ AVEC DES PROFESSIONNELS DE HAUT NIVEAU</p>
          <a href="/Registration">
            <Button>S&apos;INSCRIRE AVEC LINKEDIN</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
