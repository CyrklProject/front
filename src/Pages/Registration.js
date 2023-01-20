/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Registration.css';
import Banner from '../components/Banner/Banner';
import { Button } from '../components/Button/Button';

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

  fetch('s.Router.HandleFunc("localhost:8080/", middlewares.SetMiddlewareJSON(s.Home)).Methods("GET")').then(
    (response) => console.log(response + 'connected to API')
  );

  // fetch('', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     accept: 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: handleName,
  //     firstname: handleFirstname,
  //     mail: handleMail,
  //     telephone: handleTelephone,
  //     mdp: handleMdp
  //   })
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div className="registration-body">
      <Banner />
      <div className="registration-background">
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
          <Button
            onClick={() => {
              console.log('working');
            }}
            type="button"
            buttonStyle="btn--primary--reverse"
            buttonSize="btn--medium">
            S'INSCRIRE
          </Button>
        </div>
      </div>
    </div>
  );
}
