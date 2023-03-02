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
  Sector,
  Name,
  TitlteSector,
  Location,
  ParaSector,
  Paratitle,
  LinkDisponibilities,
  TitleExperience,
  InfosExperienceBox,
  Status,
  WrapperExperience,
  ButtonSwipeCross,
  ButtonSwipeDiner,
  Hours,
  StatusMappingContainer,
  Map,
  SuccessMessageInvit
} from './Matching.style';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button/Button';
import { Navbar } from '../components/Navbar/Navbar';

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
  const [invited_id, setInvited_id] = useState();
  const [slot_id, setSlot_id] = useState();
  const [idInviterString, setIdInviterString] = useState(sessionStorage.getItem('userID'));
  const [inviter_id, setInviter_id] = useState(parseInt(idInviterString, 10));
  const [submitted, setSubmitted] = useState(false);
  const [urlphoto, seturlphoto] = useState('');
  const [show, setShow] = useState(true);

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
        setSlot_id(data[0].id);
        console.log('slot' + slot_id);
        setInvited_id(data[0].user_id);
        console.log(invited_id);
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

  useEffect(() => {}, [year, hour, day, month, minute, lieu, slot_id, invited_id]);
  console.log(
    'dateFormated y h d m m l' + year,
    hour,
    day,
    month,
    minute,
    lieu,
    slot_id,
    invited_id
  );

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
    setShow(false);
    let nextId = id + 1;
    setCurrentUserID(sessionStorage.getItem('userID'));
    if (currentUserId == nextId) {
      nextId++;
    }
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
                // nextId à un champ vide ou dans tous les slot il correspond à aucun user avec slot on ne le voit pas
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
    let prevId = id - 1;
    if (currentUserId == prevId) {
      prevId--;
    }
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
          seturlphoto(data.urlphoto);
          setShow(false);
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

  console.log(slot_id, invited_id);
  console.log(setIdInviterString);
  console.log(slot, lieu, dateandhours, isLoadingSlots, urlphoto);

  const createInvitation = () => {
    setInviter_id(sessionStorage.getItem('userID'));
    console.log(invited_id);
    const id = invited_id;
    fetch(`http://188.165.238.74:8080/invitation/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        inviter_id: inviter_id,
        invited_id: invited_id,
        slot_id: slot_id
      })
    })
      .then((response) => {
        if (response.status <= 400) {
          setSubmitted(true);
          setShow(true);
          successMessage();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <SuccessMessageInvit>
          <p>
            Votre demande à bien été envoyé, vous pourrez voir votre invitation dans l&apos;onglet
            Invitations
          </p>
        </SuccessMessageInvit>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
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
            {show && <div className="messages">{successMessage()}</div>}
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
              <img src={userProfile.urlphoto}></img>
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
            <WrapperExperience>
              <InfosExperienceBox>
                <TitleExperience>SECTEUR ACTUEL</TitleExperience>
                <Status>{userProfile.industry}</Status>
                <TitleExperience>SECTEUR RECHERCHÉ</TitleExperience>
                <StatusMappingContainer>
                  <Status>
                    {userProfile.industrysought.map((position, index) => (
                      <Map key={index}>{position}</Map>
                    ))}
                  </Status>
                </StatusMappingContainer>
                <TitleExperience>PROFIL RECHERCHÉ</TitleExperience>
                <StatusMappingContainer>
                  <Status>
                    {userProfile.positionsought.map((position, index) => (
                      <Map key={index}>{position}</Map>
                    ))}
                  </Status>
                </StatusMappingContainer>
              </InfosExperienceBox>
            </WrapperExperience>
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
