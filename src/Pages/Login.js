/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Login.css';
import { Button } from '../components/Button/Button';
import Banner from '../components/Banner/Banner';

export default function Login() {
  const [mail, setMail] = useState('');
  const [mdp, setMdp] = useState('');

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMdp = (e) => {
    setMdp(e.target.value);
  };

  return (
    <div>
      <Banner />
      <div className="login-background">
        <div className="color-block"></div>
        <div className="login-title">Se connecter</div>

        <div className="content-login">
          <div className="content-left-login">
            <div className="login-form">
              <form>
                <input
                  onChange={handleMail}
                  className="input"
                  value={mail}
                  type="text"
                  placeholder="Mail"
                />
                <input
                  onChange={handleMdp}
                  className="input"
                  value={mdp}
                  type="text"
                  placeholder="Mot de passe"
                />
              </form>
            </div>
          </div>
          <div className="content-right-login">
            <p className="content-para-right-login">
              Laissez Cyrkl vous aider à prendre les bonnes décisions pour votre carrière
              professionnelle.
            </p>
            <a href="/Login">
              <Button
                onClick={() => {
                  console.log('working');
                }}
                type="button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium">
                SE CONNECTER
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
