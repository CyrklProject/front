import { useState, useEffect } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Profil,
  OpenLinksButton,
  NavbarLinkExtended,
  Logo
} from './Navbar.style';
import ProfilImg from '../../Pages/assets/profil.png';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false); // Ajout de l'état isConnected
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour gérer les redirections
  const recupSession = sessionStorage.getItem('token');

  useEffect(() => {
    // Cette fonction ne sera exécutée qu'une seule fois après le premier rendu de la navbar
    if (recupSession != '' && recupSession != undefined) {
      setIsLoggedin(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedin(false);
    navigate('/Deconnexion');
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>Cyrkl</Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/welcome"> Welcome</NavbarLink>
            <NavbarLink to="/registration"> Registration</NavbarLink>
            <NavbarLink to="/edit"> Edit</NavbarLink>
            {isLoggedin ? (
              // Si l'utilisateur est connecté, afficher Logout
              <NavbarLink to="/deconnexion" onClick={handleLogout}>
                {' '}
                Deconnexion
              </NavbarLink>
            ) : (
              // Sinon, afficher Login
              <NavbarLink to="/login"> Login</NavbarLink>
            )}
            <NavbarLink to="/matching"> Matching</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
          <Profil src={ProfilImg}></Profil>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/welcome"> Welcome</NavbarLinkExtended>
          <NavbarLinkExtended to="/registration"> Registration</NavbarLinkExtended>
          <NavbarLinkExtended to="/edit"> Edit</NavbarLinkExtended>
          {isLoggedin ? (
            // Si l'utilisateur est connecté, afficher Logout
            <NavbarLinkExtended to="/Deconnexion" onClick={handleLogout}>
              Deconnexion
            </NavbarLinkExtended>
          ) : (
            // Sinon, afficher Login
            <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
          )}
          <NavbarLinkExtended to="/matching"> Matching</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
