import {
  MatchingContainer,
  LeftContent,
  CenterContent,
  RightContent,
  Footer,
  Disponibility,
  Contact,
  PhotoProfil,
  NameBox,
  Hours,
  Sector,
  Name,
  TitlteSector,
  Location,
  ParaSector,
  Paratitle,
  LinkDisponibilities,
  Experience,
  TitleExperience,
  InfosExperienceBox,
  Status,
  WrapperExperience,
  ButtonSwipeCross,
  ButtonSwipeDiner
} from './Matching.style';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button/Button';

export default function Matching() {
  const [id, setId] = useState(1);
  const [userProfile, setUserProfile] = useState(null);
  const [currentUserId, setCurrentUserID] = useState('');
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(Boolean);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [slot, setSlot] = useState();
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [lieu, setLieu] = useState();
  const [dateandhours, setDateandhours] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [inviter_id, setInviter_id] = useState();
  const [invited_id, setInvited_id] = useState();
  const [slot_id, setSlot_id] = useState();

  console.log(slot, lieu, dateandhours, isLoadingSlots);

  const fetchUserById = (id) => {
    fetch(`http://188.165.238.74:8080/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserProfile(data);
        fetchSlotsByUserId(id);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleNextUser = () => {
    const nextId = id + 1;
    fetch(`http://188.165.238.74:8080/user/${nextId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        if (response.status === 400) {
          setId(1); // réinitialiser l'id à 1
        } else {
          return response.json(); // continuer le traitement
        }
      })
      .then((data) => {
        if (data) {
          setUserProfile(data);
          setId(nextId);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handlePrevUser = () => {
    const prevId = id - 1;
    fetch(`http://188.165.238.74:8080/user/${prevId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        if (response.status === 400) {
          setId(1);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          setUserProfile(data);
          setId(prevId);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchUserById(id);
  }, [id]);

  const fetchSlotsByUserId = (id) => {
    setIsLoadingSlots(true);
    fetch(`http://188.165.238.74:8080/slots/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSlot(data);
        const dateandhours = data[0].dateandhours;
        console.log(dateandhours);
        setLieu(data[0].lieu);
        setDateandhours(dateandhours);
        const dateFormated = new Date(Date.parse(dateandhours));
        setMinute(dateFormated.getMinutes());
        setYear(dateFormated.getFullYear());
        setMonth(dateFormated.getMonth());
        setDay(dateFormated.getDate());
        setHour(dateFormated.getHours());
        console.log(year);
        console.log(hour);
        console.log(day);
        console.log(month);
        console.log(data[0].lieu);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchSlotsByUserId(id);
  }, []);

  // toLocaleDateString()

  useEffect(() => {
    console.log(year);
    console.log(hour);
    console.log(day);
    console.log(month);
    console.log(minute);
    console.log(lieu);
  }, [year, hour, day, month, minute, lieu]);

  const createInvitation = () => {
    setCurrentUserID(sessionStorage.getItem('userID'));
    setToken(sessionStorage.getItem('token'));
    if (currentUserId != ' ') {
      setIsLoggedin(true);
    }
    if (currentUserId != ' ' && token != ' ') {
      console.log('normally authenticated');
      setAuth(true);
    }
    fetch(`http://188.165.238.74:8080/invitation`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        auth,
        isLoggedin
      },
      body: JSON.stringify({
        inviter_id, // remplacer par l'id de l'utilisateur connecté
        invited_id,
        slot_id // id de l'utilisateur dont le profil est affiché
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInviter_id(userProfile.id);
        console.log(userProfile.id);
        setInvited_id();
        setSlot_id();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      {userProfile && (
        <MatchingContainer>
          <LeftContent>
            <Disponibility>
              <Paratitle>PROCHAINE DISPONIBILITÉ</Paratitle>
              {slot && (
                <div>
                  {day + '.'}
                  {month + '.'}
                  {year}
                  <Hours>
                    {hour + ':'}
                    {minute}
                  </Hours>
                  <Location>{lieu}</Location>
                </div>
              )}
              <a href="./disponibilities">
                <LinkDisponibilities>Voir les autres disponibilités</LinkDisponibilities>
              </a>
            </Disponibility>
            <Contact>
              <Button
                onClick={createInvitation}
                type="button"
                buttonStyle="btn--primary--reverse"
                buttonSize="btn--medium">
                PROSPOSER DÉJEUNER
              </Button>
            </Contact>
          </LeftContent>
          <CenterContent>
            <PhotoProfil>
              <img src="https://www.michelrichardphotographe.fr/wp-content/uploads/2018/07/Profil-Linkedin-viadeo.jpg"></img>
            </PhotoProfil>
            <NameBox>
              <Name>
                {userProfile.name} {userProfile.lastname}
              </Name>
            </NameBox>
            <Sector>
              <TitlteSector>POSITION ACTUELLE</TitlteSector>
              <ParaSector>{userProfile.position}</ParaSector>
            </Sector>
          </CenterContent>
          <RightContent>
            <Experience>
              <WrapperExperience>
                <InfosExperienceBox>
                  <TitleExperience>SECTEUR ACTUEL</TitleExperience>
                  <Status>{userProfile.industry}</Status>
                  <TitleExperience>SECTEUR RECHERCHÉ</TitleExperience>
                  <Status>{userProfile.industrysought.join(' / ')}</Status>
                  <TitleExperience>PROFIL RECHERCHÉ</TitleExperience>
                  <Status>{userProfile.positionsought.join(' / ')}</Status>
                </InfosExperienceBox>
              </WrapperExperience>
            </Experience>
          </RightContent>
        </MatchingContainer>
      )}
      <Footer>
        {/* <button onClick={handleNextUser}>NEXT</button> */}
        <ButtonSwipeCross onClick={handlePrevUser}>&lt;</ButtonSwipeCross>
        <ButtonSwipeDiner onClick={handleNextUser}>&gt;</ButtonSwipeDiner>
      </Footer>
    </div>
  );
}
