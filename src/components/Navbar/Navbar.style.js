import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #efe8e1;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  padding-right: 50px;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Profil = styled.img`
  margin: 10px;
  max-width: 180px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  width: 565px;
  height: 131px;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 95px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.155em;
  // font-family: 'Oswald';
  color: #9caf88;
`;
