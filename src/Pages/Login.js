/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Login.css';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(Boolean);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    fetch('http://188.165.238.74:8080/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(token);
        setToken(data);
        setAuth(true);
      })
      .catch((err) => {
        console.error(err);
        setAuth(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    if (auth === true) {
      console.log('CONNECTED');
      navigate('/Edit');
    }
  };

  return (
    <div>
      <div className="login-background">
        <div className="color-block"></div>
        <div className="login-title">Se connecter</div>

        <div className="content-login">
          <div className="content-left-login">
            <div className="login-form">
              <form>
                <input
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  type="text"
                  placeholder="Mail"
                />
                <input
                  onChange={handlePassword}
                  className="input"
                  value={password}
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
                onClick={handleSubmit}
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
