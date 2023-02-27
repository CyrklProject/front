/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Login.css';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../components/Message/ErrorMessage';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(Boolean);
  const sessionToken = sessionStorage.getItem('token');
  const userEmail = sessionStorage.getItem('email');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [error, setError] = useState('');

  console.log(sessionToken, isLoggedin, userEmail);

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
        setToken(data);
        console.log(email, data);
        sessionStorage.setItem('token', data);
        sessionStorage.setItem('email', email);
        setAuth(true);
        setIsLoggedin(true);
      })
      .catch((err) => {
        console.error(err);
        setAuth(false);
        setIsLoggedin(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    await login();
    if (auth === true && token && token != ' ' && token != undefined) {
      console.log('CONNECTED');
      setIsLoggedin(true);
      console.log(email);
    } else {
      setError('Identifiants invalides.');
      return;
    }
    navigate('/Edit');
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
            <div className="error-message--wrapper">
              {error && <ErrorMessage className="error">{error}</ErrorMessage>}
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
