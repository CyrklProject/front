import './Deconnexion.css';
import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';

export default function Deconnexion() {
  const navigate = useNavigate();
  const recupSession = sessionStorage.getItem('token');
  const [isLoggedin, setIsLoggedin] = useState(true);

  console.log(isLoggedin);

  const logout = () => {
    if (recupSession != '' && recupSession != undefined) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('userID');
      setIsLoggedin(false);
      navigate('/Login');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="logout-background">
        <div className="color-block"></div>
        <div className="logout-title">Se déconnecter</div>
        <div className="content-logout">
          <Button
            onClick={logout}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium">
            SE DECONNECTER
          </Button>
        </div>
      </div>
    </div>
  );
}
