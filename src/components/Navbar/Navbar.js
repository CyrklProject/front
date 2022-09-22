import { useState } from 'react';
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

export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

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
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
