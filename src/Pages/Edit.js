import './welcome.css';
import React from 'react';
import { CategorieTitle, EditContainer, AvatarMenu } from './Edit.style';
import { Avatar } from '../components/Avatar/Avatar';
import { StyledLabel, Flex, Input, LabelContainer } from '../components/label/Label.style';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button/Button';
// import { MultiSelect } from '../components/MultiSelect/MultiSelect';
import Select from 'react-select';

export default function Edit() {
  const [id, setId] = useState();
  const [lastname, setlastname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [position, setPosition] = useState('');
  const [urlphoto, seturlphoto] = useState('');
  const [positionsought, setPositionsought] = useState([]); //interlocuteurs
  const [industry, setIndustry] = useState(''); //secteur
  const [industrysought, setIndustrysought] = useState([]); //secteur d'activité voulu
  const [password, setPassword] = useState('');
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const [selectedOptionsIndustry, setSelectedOptionsIndustry] = useState();
  const [selectedIndustrysought, setselectedIndustrysought] = useState([]);
  const [year, setYear] = useState()
  const [month, setmonth] = useState()
  const [day, setDay] = useState()
  const [hour, setHour] = useState()
  // const [minutes, setMinutes] = useState()
  const [dateandhours, setDateAndHours] = useState(new Date())
  // const [dateObj, setDateObj] = new Date()
  const [lieu, setLieu] = useState('')
  const [selectedOptionsYear, setSelectedOptionsYear] = useState()
  const [selectedOptionsmonth, setSelectedOptionsmonth] = useState()
  const [selectedOptionsDay, setSelectedOptionsDay] = useState()
  const [selectedOptionsHour, setSelectedOptionsHour] = useState()

  const [selectedOptionsPosition, setSelectedOptionsPosition] = useState();
  const [selectedPositionsought, setselectedPositionsought] = useState([]);

  // rajoute le menu déroulant pour les 4 h, d, j , a) OK

  console.log(urlphoto, id, createdAt, updatedAt);
  const profilephoto =
    'https://www.michelrichardphotographe.fr/wp-content/uploads/2018/07/Profil-Linkedin-viadeo.jpg';

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

  function handleChangeIndustry(e) {
    setIndustry(e.target.value);
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
              // window.location.reload();
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
  } else {
    // Clear the localStorage flag to allow for another fetch later
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await fetchUsersData();
  // };

  const handleSubmit = () => {
    console.log('id' + id);
    // const token = sessionStorage.getItem('token');
    fetch(`http://188.165.238.74:8080/updateuser/${id}`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
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
        updatedAt
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response);
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
        setPositionsought(positionsought);
        setIndustrysought(industrysought);
        setIndustry(data.industry);
        // setIndustrysought(Array.from(data.industrysought));
        setPassword(data.password);
        setCreatedAt(data.createdAt);
        setUpdatedAt(data.updatedAt);
        seturlphoto(profilephoto);
        // window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  const allSelectedValuesIndustry = [];

  function handleSelectIndustry(data) {
    setSelectedOptionsIndustry(data);
    const selectedValues = data.map((option) => option.value);
    allSelectedValuesIndustry.push(...selectedValues); // ajout des nouvelles valeurs à la variable allSelectedValues
    setselectedIndustrysought(selectedValues);
    setIndustrysought(allSelectedValuesIndustry); // utilisation de la variable allSelectedValues comme source de vérité pour les valeurs sélectionnées
    return allSelectedValuesIndustry;
  }

  const allSelectedValuesPosition = [];

  function handleSelectPosition(data) {
    setSelectedOptionsPosition(data);
    const selectedValues = data.map((option) => option.value);
    allSelectedValuesPosition.push(...selectedValues); // ajout des nouvelles valeurs à la variable allSelectedValues
    setselectedPositionsought(selectedValues);
    setPositionsought(allSelectedValuesPosition); // utilisation de la variable allSelectedValues comme source de vérité pour les valeurs sélectionnées
    return allSelectedValuesPosition;
  }

  console.log(positionsought);
  console.log(selectedIndustrysought, selectedPositionsought);


  // faire comme handleSelectPosition (prend j, a, ... il les met en etat il les retourn en les mettant dans SetDateandhours (nouveau format))
  function handleSelectYear(data) {
    setSelectedOptionsYear(data.value);
    // setSelectedOptionsYear(value)
    // setDateAndHours(new Date(Date.UTC(setYear(data.value), setMonth(data.value), day, hour, minute, second, millisecond)));
  }

  function handleSelectMonth(data) {
    setSelectedOptionsmonth(data.value)
  }

  function handleSelectDay(data) {
    setSelectedOptionsDay(data.value)
  }

  function handleSelectHour(data) {
    setSelectedOptionsHour(data.value)
  }

  // function handleSelectPosition(data) {
  //   setSelectedOptionsPosition(data);
  //   console.log(selectedOptionsPosition + 'industry');
  //   setselectedPositionsought(data.map((option) => option.value));
  //   console.log(selectedIndustrysought + 'position');
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setToken(sessionStorage.getItem('token'));
  //   console.log(token);

  //   const updatedUser = {
  // lastname,
  // name,
  // email,
  // telephone,
  // position,
  // urlphoto,
  // positionsought,
  // industry,
  // industrysought,
  // password,
  // updatedAt
  //   };

  //   try {
  //     const response = await fetch(`http://188.165.238.74:8080/updateuser/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(updatedUser)
  //     });
  //     console.log(response + 'reponse');

  //     if (!response.ok) {
  //       throw new Error('Failed to update user');
  //     }

  //     const data = await response.json();
  //     console.log(response + 'reponse');
  //     console.log(data + 'data');
  //     setId(data.id);
  //     setlastname(data.lastname);
  //     setName(data.name);
  //     setEmail(data.email);
  //     setTelephone(data.telephone);
  //     setPosition(data.position);
  //     setPositionsought(data.positionsought);
  //     setIndustry(data.industry);
  //     setIndustrysought(data.industrysought);
  //     setPassword(data.password);
  //     setCreatedAt(data.createdAt);
  //     setUpdatedAt(data.updatedAt);
  //     seturlphoto(data.urlphoto);
  //     setToken(sessionStorage.getItem('token'));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  const optionListAnnée = [
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' },
    { value: '2030', label: '2030' }
  ];

  const optionListMonth = [
    { value: '1', label: 'Janvier' },
    { value: '2', label: 'Février' },
    { value: '3', label: 'Mars' },
    { value: '4', label: 'Avril' },
    { value: '5', label: 'Mai' },
    { value: '6', label: 'Juin' },
    { value: '7', label: 'Juillet' },
    { value: '8', label: 'Août' },
    { value: '9', label: 'Septembre' },
    { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' },
    { value: '12', label: 'Décembre' }
  ];

  const optionListDay = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
  ];

  const optionListHour = [
    { value: '12:00', label: '1' },
    { value: '12:15', label: '2' },
    { value: '12:30', label: '3' },
    { value: '12:45', label: '4' },
    { value: '13:00', label: '5' },
    { value: '13:15', label: '6' },
    { value: '13:30', label: '7' },
    { value: '13:45', label: '8' },
    { value: '14:00', label: '9' },
    { value: '14:15', label: '10' },
    { value: '14:30', label: '11' },
    { value: '14:45', label: '12' },
    { value: '15:00', label: '13' }
  ];

// rajouter les options du menu déraoulatn 
  return (
    <EditContainer>
      <CategorieTitle>Mon Profil</CategorieTitle>
      <AvatarMenu>
        <Avatar profilephoto={profilephoto}></Avatar>
        <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
          Modifier
        </Button>
        <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
          Supprimer
        </Button>

        <Button
          onClick={handleSubmit}
          type="button"
          buttonStyle="btn--primary--reverse"
          buttonSize="btn--medium">
          ENREGISTRER
        </Button>
      </AvatarMenu>

      <LabelContainer>
        <Flex id="firstname-container">
          <StyledLabel>Prénom</StyledLabel>
          <Input type="text" id="name" value={name} onChange={handleChangeName} />
        </Flex>

        <Flex>
          <StyledLabel>Nom</StyledLabel>
          <Input type="text" id="lastname" value={lastname} onClick={handleChangeLastname} />
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

        <Flex>
          <StyledLabel>Recherche</StyledLabel>
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
      </LabelContainer>
    </EditContainer>
  );
}
