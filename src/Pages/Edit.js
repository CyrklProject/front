import './welcome.css';
import React from 'react';
import { CategorieTitle, EditContainer, AvatarMenu } from './Edit.style';
import { Avatar } from '../components/Avatar/Avatar';
import { StyledLabel, Flex, Input, LabelContainer } from '../components/label/Label.style';
import { useState } from 'react';
import { Button } from '../components/Button/Button';

export default function Edit() {
  const [id, setId] = useState();
  const [lastname, setlastname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [position, setPosition] = useState('');
  const [urlphoto, seturlphoto] = useState('');
  const [positionsought, setPositionsought] = useState();
  const [industry, setIndustry] = useState('');
  const [industrysought, setIndustrysought] = useState();
  const [password, setPassword] = useState('');
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  // const [currentUser, setCurrentUser] = useState();

  console.log(urlphoto, id, createdAt, updatedAt);

  function handleChangeLastname(e) {
    setlastname(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeTelephone(e) {
    setTelephone(e.target.value);
  }

  function handleChangePosition(e) {
    setPosition(e.target.value);
  }

  function handleChangePositionSought(e) {
    setPositionsought(e.target.value);
  }

  function handleChangeIndustry(e) {
    setIndustry(e.target.value);
  }

  function handleChangeIndustrySought(e) {
    setIndustrysought(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const fetchUsersData = () => {
    fetch('http://188.165.238.74:8080/usersG')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const userEmail = sessionStorage.getItem('email');
        const allUsers = data;
        const user = allUsers.find((user) => user.email === userEmail);
        if (user) {
          const userId = user.id;
          console.log(`User with email ${userEmail} has ID ${userId}`);

          fetch(`http://188.165.238.74:8080/users/${userId}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              setId(data.id);
              setlastname(data.lastname);
              setName(data.name);
              setEmail(data.email);
              setTelephone(data.telephone);
              setPosition(data.position);
              setPositionsought(data.positionsought);
              setIndustry(data.industry);
              setIndustrysought(data.industrysought);
              setPassword(data.password);
              setCreatedAt(data.createdAt);
              setUpdatedAt(data.updatedAt);
              seturlphoto(data.urlphoto);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          console.log(`No user found with email ${userEmail}`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  fetchUsersData();

  return (
    <EditContainer>
      <CategorieTitle>Mon Profil</CategorieTitle>
      <AvatarMenu>
        <Avatar></Avatar>
        <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
          Modifier
        </Button>
        <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
          Supprimer
        </Button>
      </AvatarMenu>

      <LabelContainer>
        <Flex id="firstname-container">
          <StyledLabel>Prénom</StyledLabel>
          <Input type="text" id="lastname" value={name} onChange={handleChangeName} />
        </Flex>

        <Flex>
          <StyledLabel>Nom</StyledLabel>
          <Input type="text" id="name" value={lastname} onChange={handleChangeLastname} />
        </Flex>

        <Flex>
          <StyledLabel>Email</StyledLabel>
          <Input
            type="text"
            id="email"
            style={{ width: 350 }}
            value={email}
            onChange={handleChangeEmail}
          />
        </Flex>

        <Flex>
          <StyledLabel>Telephone</StyledLabel>
          <Input type="text" id="telephone" value={telephone} onChange={handleChangeTelephone} />
        </Flex>

        <Flex>
          <StyledLabel>Password</StyledLabel>
          <Input type="text" id="password" value={password} onChange={handleChangePassword} />
        </Flex>

        <Flex>
          <StyledLabel>Secteur</StyledLabel>
          <Input type="text" id="industry" value={industry} onChange={handleChangeIndustry} />
        </Flex>

        <Flex>
          <StyledLabel>Secteur recherche</StyledLabel>
          <Input
            type="text"
            id="industrySought"
            value={industrysought}
            onChange={handleChangeIndustrySought}
          />
        </Flex>

        <Flex>
          <StyledLabel>Titre recherche</StyledLabel>
          <Input
            type="text"
            id="positionSought"
            value={positionsought}
            onChange={handleChangePositionSought}
          />
        </Flex>

        <Flex>
          <StyledLabel>Titre profil</StyledLabel>
          <Input
            type="text"
            id="position"
            value={position}
            onChange={handleChangePosition}
            style={{ width: 490 }}
          />
        </Flex>
      </LabelContainer>
    </EditContainer>
  );
}
