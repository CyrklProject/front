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
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const recupSession = sessionStorage.getItem('token');

  useEffect(() => {
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
            <NavbarLink to="/edit"> Profil</NavbarLink>
            <NavbarLink to="/invitations"> Invitations</NavbarLink>
            <NavbarLink to="/users/:id"> Matching</NavbarLink>
            {isLoggedin ? (
              <NavbarLink to="/deconnexion" onClick={handleLogout}>
                {' '}
                Deconnexion
              </NavbarLink>
            ) : (
              <NavbarLink to="/login"> Login</NavbarLink>
            )}

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
          <NavbarLinkExtended to="/invitations"> Invitations</NavbarLinkExtended>
          {isLoggedin ? (
            <NavbarLinkExtended to="/Deconnexion" onClick={handleLogout}>
              Deconnexion
            </NavbarLinkExtended>
          ) : (
            <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
          )}
          <NavbarLinkExtended to="/users/:id"> Matching</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
