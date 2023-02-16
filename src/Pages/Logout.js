import './Logout.css';
import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const recupSession = sessionStorage.getItem('token');
  const [isLoggedin, setIsLoggedin] = useState(true);

  console.log(isLoggedin);

  const logout = () => {
    if (recupSession != '' && recupSession != undefined) {
      sessionStorage.removeItem('token');
      setIsLoggedin(false);
      navigate('/Login');
    }
  };

  return (
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
  );
}
