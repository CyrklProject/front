import {
  MatchingContainer,
  LeftContent,
  CenterContent,
  RightContent,
  Footer,
  Disponibility,
  Contact,
  Paratitle,
  Date,
  Location,
  LinkDisponibilities,
  PhotoProfil,
  NameBox,
  Sector,
  Name,
  TitlteSector,
  ParaSector,
  Experience,
  TitleExperience,
  InfosExperienceBox,
  Status,
  WrapperExperience,
  ButtonSwipeCross,
  ButtonSwipeDiner,
  Hours
} from './Matching.style';
import { Button } from '../components/Button/Button';
import { useState, useEffect } from 'react';

export default function Matching() {
  const [id, setId] = useState(1);
  const [userProfile, setUserProfile] = useState(null);
  const [currentUserId, setCurrentUserID] = useState();
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
          // vérifier si l'id suivant n'existe pas, chercher le prochain utilisateur disponible
          fetch(`http://188.165.238.74:8080/user/${nextId + 1}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then((response) => {
              if (response.status === 400) {
                // si le prochain n'existe pas non plus, retourner à l'id 1
                setId(1);
              } else {
                return response.json();
              }
            })
            .then((data) => {
              if (data) {
                setUserProfile(data);
                setId(nextId + 1);
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          return response.json();
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
        console.log('data' + data);
        setSlot_id(slot.id);
        console.log('slot' + slot_id);
        const dateandhours = data[0].dateandhours;
        console.log(dateandhours);
        setLieu(data[0].lieu);
        setDateandhours(dateandhours);
        const dateFormated = new Date(Date.parse(dateandhours));
        setMinute(dateFormated.getMinutes());
        console.log('dateFormated minute' + minute);
        setYear(dateFormated.getFullYear());
        console.log('dateFormated year' + year);
        setMonth(dateFormated.getMonth());
        console.log('dateFormated month' + month);
        setDay(dateFormated.getDate());
        console.log('dateFormated date' + Date);
        setHour(dateFormated.getHours());
        console.log('dateFormated hours' + hour);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchSlotsByUserId(id);
  }, []);

  useEffect(() => {}, [year, hour, day, month, minute, lieu]);
  console.log('dateFormated y h d m m l' + year, hour, day, month, minute, lieu);

  const createInvitation = () => {
    setInviter_id(sessionStorage.getItem('userID'));
    console.log(inviter_id);
    const uid = id;
    console.log(uid);
    fetch(`http://188.165.238.74:8080/invitation/${uid}`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        inviter_id,
        invited_id,
        slot_id
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentUserID(sessionStorage.getItem('userID'));
        console.log(currentUserId);
        setInvited_id(id);
        console.log(invited_id);
        setSlot_id(slot.id);
        console.log(slot_id);
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
