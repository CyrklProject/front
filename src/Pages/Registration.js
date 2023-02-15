/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './Registration.css';
import { Button } from '../components/Button/Button';
import { SuccessMessage } from '../components/Message/SuccessMessage';
import { ErrorMessage } from '../components/Message/ErrorMessage';

export default function Registration() {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setpassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handlelastname = (e) => {
    setlastname(e.target.value);
    setSubmitted(false);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
    setSubmitted(false);
  };
  const handleTelephone = (e) => {
    setTelephone(e.target.value);
    setSubmitted(false);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
    setSubmitted(false);
  };

  const fetchUserData = () => {
    fetch('http://188.165.238.74:8080/usersG')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const ResetForm = () => {
    setName('');
    setlastname('');
    setemail('');
    setTelephone('');
    setpassword('');
  };

  const postSignIn = () => {
    fetch('http://188.165.238.74:8080/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        lastname,
        email,
        telephone,
        password
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.error);
        setErrorData(data.error);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignIn();
    if (status == 200) {
      setSubmitted(true);
      setError(false);
      ResetForm();
      successMessage();
    } else {
      setError(true);
      errorMessage();
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <SuccessMessage></SuccessMessage>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none'
        }}>
        <ErrorMessage>{errorData}</ErrorMessage>
      </div>
    );
  };

  return (
    <div className="registration-body">
      <div className="registration-background">
        <div className="color-block-registration"></div>
        <div className="registration-title">S&apos;inscrire</div>
        {/* Calling to the methods  */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
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
              onChange={handlelastname}
              className="input"
              value={lastname}
              type="text"
              placeholder="Prénom"
            />
            <input
              onChange={handleemail}
              className="input"
              value={email}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={handleTelephone}
              className="input"
              value={telephone}
              type="text"
              placeholder="Téléphone"
            />
            <input
              onChange={handlepassword}
              className="input"
              value={password}
              type="text"
              placeholder="Mot de passe"
            />
          </form>
          <Button
            onClick={handleSubmit}
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
