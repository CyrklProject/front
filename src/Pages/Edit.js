import React from 'react';
import './welcome.css';
import { CategorieTitle, EditContainer, AvatarMenu } from './Edit.style';
import { Avatar } from '../components/Avatar/Avatar';
import { StyledLabel, Flex, Input, LabelContainer } from '../components/label/Label.style';
import { useState } from 'react';

export default function Edit() {
  const [inputFirstName, setInputFirstName] = useState('Marie');
  const [inputName, setInputName] = useState('Ducond');
  const [inputEmail, setInputEmail] = useState('Ducond@dmail.meuh');
  const [inputTel, setInputTel] = useState('0733475624');
  const [inputTitreProfil, setInputTitreProfil] = useState('CTO mashmalow de saint Cyr');

  function handleChangeFirstName(e) {
    setInputFirstName(e.target.value);
  }

  function handleChangeName(e) {
    setInputName(e.target.value);
  }

  function handleChangeEmail(e) {
    setInputEmail(e.target.value);
  }

  function handleChangeTelephone(e) {
    setInputTel(e.target.value);
  }

  function handleChangeTitreProfil(e) {
    setInputTitreProfil(e.target.value);
  }

  return (
    <EditContainer>
      <CategorieTitle>Mon Profil</CategorieTitle>
      <AvatarMenu>
        <Avatar></Avatar>
      </AvatarMenu>

      <LabelContainer>
        <Flex id="firstname-container">
          <StyledLabel>Prénom</StyledLabel>
          <Input
            type="text"
            id="firstName"
            value={inputFirstName}
            onChange={handleChangeFirstName}
          />
        </Flex>

        <Flex>
          <StyledLabel>Nom</StyledLabel>
          <Input type="text" id="name" value={inputName} onChange={handleChangeName} />
        </Flex>

        <Flex>
          <StyledLabel>Email</StyledLabel>
          <Input
            type="text"
            id="email"
            style={{ width: 350 }}
            value={inputEmail}
            onChange={handleChangeEmail}
          />
        </Flex>

        <Flex>
          <StyledLabel>Telephone</StyledLabel>
          <Input type="text" id="telephone" value={inputTel} onChange={handleChangeTelephone} />
        </Flex>

        <Flex>
          <StyledLabel>Titre profil</StyledLabel>
          <Input
            type="text"
            id="titre--profil"
            value={inputTitreProfil}
            onChange={handleChangeTitreProfil}
            style={{ width: 490 }}
          />
        </Flex>
      </LabelContainer>
    </EditContainer>
  );
}
