import './welcome.css';
import React from 'react';
import {
  CategorieTitle,
  EditContainer,
  AvatarMenu,
  ButtonWrapper,
  InputSoughtWrapper,
  DeleteWrapper,
  SelectWrapper
} from './Edit.style';
import { Avatar } from '../components/Avatar/Avatar';
import { StyledLabel, Flex, Input, LabelContainer } from '../components/label/Label.style';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button/Button';
import Select from 'react-select';
import { SuccessMessage } from '../components/Message/SuccessMessage';
import { ErrorMessage } from '../components/Message/ErrorMessage';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const [id, setId] = useState();
  const [lastname, setlastname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [position, setPosition] = useState('');
  const [urlphoto, seturlphoto] = useState('');
  const [positionsought, setPositionsought] = useState([]);
  const [industry, setIndustry] = useState('');
  const [industrysought, setIndustrysought] = useState([]);
  const [password, setPassword] = useState('');
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const [selectedOptionsIndustry, setSelectedOptionsIndustry] = useState();
  const [selectedIndustrysought, setselectedIndustrysought] = useState([]);
  const [selectedOptionsPosition, setSelectedOptionsPosition] = useState();
  const [selectedPositionsought, setselectedPositionsought] = useState([]);
  const [isModified, setIsModified] = useState(false);
  const [error, setError] = useState('');
  const [errorText, setErrorText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  console.log(urlphoto, id, createdAt, updatedAt);
  const profilephoto =
    'https://www.michelrichardphotographe.fr/wp-content/uploads/2018/07/Profil-Linkedin-viadeo.jpg';

  function handleChangeLastname(e) {
    setlastname(e.target.value);
    setIsModified(true);
  }

  function handleChangeName(e) {
    setName(e.target.value);
    setIsModified(true);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setIsModified(true);
  }

  function handleChangeTelephone(e) {
    setTelephone(e.target.value);
    setIsModified(true);
  }

  function handleChangePosition(e) {
    setPosition(e.target.value);
    setIsModified(true);
  }

  function handleChangeIndustry(e) {
    setIndustry(e.target.value);
    setIsModified(true);
  }

  console.log(dataLoading + 'data is loading');

  const fetchUsersData = () => {
    fetch('http://188.165.238.74:8080/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
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

          fetch(`http://188.165.238.74:8080/user/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setId(data.id);
              sessionStorage.setItem('userID', data.id);
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
              seturlphoto(profilephoto);
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

  useEffect(() => {
    fetchUsersData();
  }, []);

  if (dataLoading === false) {
    setDataLoading(true);
  }

  const handleSubmit = () => {
    console.log('id' + id);
    fetch(`http://188.165.238.74:8080/updateuser/${id}`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        id,
        lastname,
        name,
        email,
        telephone,
        position,
        urlphoto,
        positionsought,
        industry,
        industrysought,
        password,
        updatedAt,
        createdAt
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      console.log(response);
      response.json().then((data) => {
        console.log('data.error' + data.error);
        setErrorText(data.error);
        console.log('data.error2' + data.error);
        console.log(data);
        setId(data.id);
        setlastname(data.lastname);
        setName(data.name);
        setEmail(data.email);
        setTelephone(data.telephone);
        setPosition(data.position);
        setPositionsought(positionsought);
        setIndustrysought(industrysought);
        setIndustry(data.industry);
        setPassword('123456');
        setCreatedAt(data.createdAt);
        setUpdatedAt(data.updatedAt);
        seturlphoto(profilephoto);
        console.log(response.status);
      });
      if (response.status <= 400) {
        setSubmitted(true);
        console.log('im under 400');
        successMessage();
      } else {
        console.log('im after 400');
        setError(true);
        console.log(error + 'error in 400');
        errorMessage();
      }
      setTimeout(() => {
        navigate('/users/:id');
      }, 10000);
    });
  };

  function handleSelectIndustry(data) {
    setSelectedOptionsIndustry(data);
    const selectedValues = data.map((option) => option.value);
    setselectedIndustrysought(selectedValues);
    setIsModified(true);
    setIndustrysought(selectedValues);
  }

  function handleSelectPosition(data) {
    setSelectedOptionsPosition(data);
    const selectedValues = data.map((option) => option.value);
    setselectedPositionsought(selectedValues);
    setIsModified(true);
    setPositionsought(selectedValues);
  }

  console.log(positionsought);
  console.log(selectedIndustrysought, selectedPositionsought);

  const optionListIndustry = [
    { value: 'agro-alimentaire', label: 'Agro-alimentaire' },
    { value: 'industrie', label: 'Industrie' },
    { value: 'energie', label: 'Énergie' },
    { value: 'education', label: 'Éducation' },
    { value: 'conseil', label: 'Conseil' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance ', label: 'Finance ' },
    { value: 'technologies ', label: 'Technologies ' },
    { value: 'sante ', label: 'Soins de santé ' }
  ];

  const optionListPosition = [
    { value: 'entrepreneurs', label: 'Entrepreneurs' },
    { value: 'CTO', label: 'CTO' },
    { value: 'Managers', label: 'Managers' },
    { value: 'Experts sectoriels ', label: 'Experts sectoriels ' },
    { value: 'Investisseurs', label: 'Investisseurs' },
    { value: 'Mentors', label: 'Mentors' },
    { value: 'Conseillers', label: 'Conseillers' },
    { value: 'Consultants', label: 'Consultants' },
    { value: 'Leaders communautaires', label: 'Leaders communautaires' },
    { value: 'Universitaires', label: 'Universitaires' }
  ];

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <SuccessMessage>
          <p>Votre profil à bien été édité, vous allez être redirigé vers la page matching</p>
        </SuccessMessage>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none'
        }}>
        <ErrorMessage>{errorText}</ErrorMessage>
      </div>
    );
  };

  const deleteUser = () => {
    fetch(`http://188.165.238.74:8080/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(() => setStatus('Delete successful'));
  };

  console.log(status);

  return (
    <EditContainer>
      <CategorieTitle>Mon Profil</CategorieTitle>
      <AvatarMenu>
        <Avatar profilephoto={profilephoto}></Avatar>
        <DeleteWrapper>
          <Button
            onClick={deleteUser}
            type="button"
            buttonStyle="btn--primary--reverse"
            buttonSize="btn--medium">
            SUPPRIMER VOTRE COMPTE
          </Button>
        </DeleteWrapper>
      </AvatarMenu>
      <div className="messages">{successMessage()}</div>
      <div className="messages">{errorMessage()}</div>
      <LabelContainer>
        <Flex id="firstname-container">
          <StyledLabel>Prénom</StyledLabel>
          <Input type="text" id="name" value={name} onChange={handleChangeName} />
        </Flex>

        <Flex>
          <StyledLabel>Nom</StyledLabel>
          <Input type="text" id="lastname" value={lastname} onChange={handleChangeLastname} />
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
          <StyledLabel>Secteur</StyledLabel>
          <Input type="text" id="industry" value={industry} onChange={handleChangeIndustry} />
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
        <Flex>
          <StyledLabel>Secteur d&apos;activité recherché</StyledLabel>
          <InputSoughtWrapper>
            <Input
              type="text"
              id="position"
              value={selectedIndustrysought.join(', ')}
              style={{ width: 290, marginBottom: 30 }}
            />
          </InputSoughtWrapper>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? '#173F35' : '#9CAF88'
              })
            }}
            options={optionListIndustry}
            placeholder="Select"
            value={selectedOptionsIndustry}
            onChange={handleSelectIndustry}
            isMulti
          />
        </Flex>
        <SelectWrapper>
          <Flex>
            <StyledLabel>Recherche</StyledLabel>
            <InputSoughtWrapper>
              <Input
                type="text"
                id="position"
                value={selectedPositionsought.join(', ')}
                style={{ width: 290, marginBottom: 30, marginTop: 21 }}
              />
            </InputSoughtWrapper>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? '#173F35' : '#9CAF88'
                }),
                options: () => ({
                  borderColor: '#173F35'
                })
              }}
              options={optionListPosition}
              placeholder="Select"
              value={selectedOptionsPosition}
              onChange={handleSelectPosition}
              isMulti
            />
          </Flex>
        </SelectWrapper>
        {isModified && (
          <ButtonWrapper>
            <Button
              onClick={handleSubmit}
              type="button"
              buttonStyle="btn--primary--reverse"
              buttonSize="btn--medium">
              ENREGISTRER
            </Button>
          </ButtonWrapper>
        )}
      </LabelContainer>
    </EditContainer>
  );
}
