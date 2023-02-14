/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './Registration.css';
import { Button } from '../components/Button/Button';

export default function Registration() {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setpassword] = useState('');
  const [users, setusers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
    fetch('http://localhost:8080/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setusers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      postSignIn();
    }
  };

  const postSignIn = () => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        lastname,
        email,
        telephone,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <h1>User {name} successfully registered!!</h1>
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
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  // function home() {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch(`http://188.165.238.74:8080/users`)
  //       .then((response) => response.json())
  //       .then((usefulData) => {
  //         console.log(usefulData);
  //         setLoading(false);
  //         setData(usefulData);
  //       });
  //   }, []);

  //   return (
  //     <>
  //       <div className="App">
  //         {loading && <p>Loading...</p>}
  //         {!loading && <p>Fetched data</p>}
  //         <div>{data}</div>
  //       </div>
  //     </>
  //   );
  // }

  // function home() {
  //   const getUsers = () => {
  //     return fetch('http://localhost:8080/users', {
  //       type: 'GET'
  //     }).then((res) => res.json());
  //   };
  //   console.log(getUsers);
  //   return {
  //     getUsers
  //   };
  // }

  // home();

  // fetch('', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     accept: 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: handleName,
  //     lastname: handlelastname,
  //     email: handleemail,
  //     telephone: handleTelephone,
  //     password: handlepassword
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
      <div className="registration-background">
        <div className="color-block-registration"></div>
        <div className="registration-title">S&apos;inscrire</div>
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div>
          {users.length > 0 && (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
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
