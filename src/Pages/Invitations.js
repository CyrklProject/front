import { useState, useEffect } from 'react';
import {
  InvitationsWrapper,
  InviationReceivedWrapper,
  InvitationSendedWrapper,
  TitleReceived,
  TitleSended,
  InProgress,
  Accepted,
  Rejected,
  Location,
  Hours,
  Invitation,
  Inviter,
  DateAndHours,
  ButtonAccepted,
  ButtonRefused,
  ButtonsWrapper,
  RefusedBadge,
  AcceptedBadge,
  WaitingBadge
} from './Invitations.style';
import { Navbar } from '../components/Navbar/Navbar';

export default function Inviations() {
  //received
  const [datafetchInvit, setDatafetchInvit] = useState([]);
  const [status, setStatus] = useState('');
  const [inviter_id, setInviter_id] = useState();
  const [inviter_name, setInviter_name] = useState('');
  const [inviter_lastname, setInviter_lastname] = useState('');
  const [slot_id, setSlot_id] = useState();
  const [slotDateAndHours, setSlotDateAndHours] = useState();
  const [lieu, setLieu] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [slotId, setSlotId] = useState();
  const [invited_id, setInvited_id] = useState();
  const [acceptedInvitations, setAcceptedInvitations] = useState([]);
  const [rejectedInvitations, setRejectedInvitations] = useState([]);
  const [invitationID, setInvitationID] = useState();

  //sended
  const [datafetchInvitSended, setDatafetchInvitSended] = useState([]);
  const [statusSended, setStatusSended] = useState('');
  const [invited_idSended, setInvited_idSended] = useState();
  const [invited_nameSended, setInvited_nameSended] = useState('');
  const [invited_lastnameSended, setInvited_lastnameSended] = useState('');
  const [slot_idSended, setSlot_idSended] = useState();
  const [slotDateAndHoursSended, setSlotDateAndHoursSended] = useState();
  const [lieuSended, setLieuSended] = useState();
  const [yearSended, setYearSended] = useState();
  const [monthSended, setMonthSended] = useState();
  const [daySended, setDaySended] = useState();
  const [hourSended, setHourSended] = useState();
  const [minuteSended, setMinuteSended] = useState();
  const [slotIdSended, setSlotIdSended] = useState();
  // const [inviter_idSended, setInviter_idSended] = useState();

  const getInvitationByUserId = () => {
    const userId = sessionStorage.getItem('userID');
    console.log(userId);
    fetch(`http://188.165.238.74:8080/invitationsreceived/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          setDatafetchInvit(data[0]);
          setSlotId(slot_id);
          setInvitationID(data[0].id);
          setInviter_id(data[0].inviter_id);
          setInviter_lastname(data[0].inviter.lastname);
          setInviter_name(data[0].inviter.name);
          setSlot_id(data[0].slot_id);
          setStatus(data[0].statut);
          setInvited_id(data[0].invited_id);
          setSlotDateAndHours(data[0].slot.dateandhours);
          setLieu(data[0].slot.lieu);
          if (data[0].slot.dateandhours != '') {
            const dateFormated = new Date(Date.parse(data[0].slot.dateandhours));
            setMinute(dateFormated.getMinutes());
            setYear(dateFormated.getFullYear());
            setMonth(dateFormated.getMonth());
            setDay(dateFormated.getDate());
            setHour(dateFormated.getHours());
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getInvitationByUserId();
  }, []);

  useEffect(() => {}, [invited_id, slotId, year, hour, day, month, minute, lieu]);

  console.log(
    rejectedInvitations,
    acceptedInvitations,
    datafetchInvit,
    status,
    inviter_id,
    slotDateAndHours
  );

  const getSendedInvitation = () => {
    const userId = sessionStorage.getItem('userID');
    console.log(userId);
    fetch(`http://188.165.238.74:8080/invitationssended/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setDatafetchInvitSended(data[0]);
          setSlotIdSended(slot_idSended);
          console.log(slotIdSended);
          setInvited_idSended(data[0].invited_id);
          setInvited_lastnameSended(data[0].invited.lastname);
          setInvited_nameSended(data[0].invited.name);
          setSlot_idSended(data[0].slot_id);
          setStatusSended(data[0].statut);
          setInvited_idSended(data[0].invited_id);
          setSlotDateAndHoursSended(data[0].slot.dateandhours);
          setLieuSended(data[0].slot.lieu);
          if (data[0].slot.dateandhours != '') {
            const dateFormatedSended = new Date(Date.parse(data[0].slot.dateandhours));
            setMinuteSended(dateFormatedSended.getMinutes());
            setYearSended(dateFormatedSended.getFullYear());
            setMonthSended(dateFormatedSended.getMonth());
            setDaySended(dateFormatedSended.getDate());
            setHourSended(dateFormatedSended.getHours());
          }
        }
      });
  };

  useEffect(() => {
    getSendedInvitation();
  }, []);

  useEffect(() => {}, [
    invited_idSended,
    slotIdSended,
    yearSended,
    hourSended,
    daySended,
    monthSended,
    minuteSended,
    lieuSended
  ]);

  console.log(datafetchInvitSended, statusSended, invited_idSended, slotDateAndHoursSended);

  const accepteInvitation = () => {
    const id = invitationID;
    const newStatus = 'accepted';
    fetch(`http://188.165.238.74:8080/updateinvitation/${id}`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        statut: newStatus
      })
    })
      .then((response) => {
        if (response.status === 200) {
          setStatus(newStatus);
          setAcceptedInvitations((prevInvitations) => [...prevInvitations, datafetchInvit]);
          setDatafetchInvit(null);
        } else {
          console.error('Error updating invitation status');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const refusedInvitation = () => {
    const id = invitationID;
    const newStatus = 'refused';
    fetch(`http://188.165.238.74:8080/updateinvitation/${id}`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        statut: newStatus
      })
    })
      .then((response) => {
        if (response.status === 200) {
          setStatus(newStatus);
          setRejectedInvitations((prevInvitations) => [...prevInvitations, datafetchInvit]);
          setDatafetchInvit(null);
        } else {
          console.error('Error updating invitation status');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <InvitationsWrapper>
        <InviationReceivedWrapper>
          <TitleReceived>REÇUES</TitleReceived>
          {datafetchInvit && status === 'in progress' && (
            <>
              <InProgress>Nouvelles invitations</InProgress>
              <Invitation>
                <Inviter>
                  {inviter_name} {inviter_lastname}
                </Inviter>
                <DateAndHours>
                  {day + ' . '}
                  {month + ' . '}
                  {year}
                  <Hours>
                    {hour + ' : '}
                    {minute}
                  </Hours>
                  <Location>{lieu}</Location>
                </DateAndHours>
                <ButtonsWrapper>
                  <ButtonAccepted onClick={accepteInvitation}>Accepter</ButtonAccepted>
                  <ButtonRefused onClick={refusedInvitation}>Refuser</ButtonRefused>
                </ButtonsWrapper>
              </Invitation>
            </>
          )}
          {datafetchInvit && status === 'accepted' && (
            <>
              <Accepted>Acceptées</Accepted>
              <Invitation>
                <Inviter>
                  {inviter_name} {inviter_lastname}
                </Inviter>
                <DateAndHours>
                  {day + ' . '}
                  {month + ' . '}
                  {year}
                  <Hours>
                    {hour + ' : '}
                    {minute}
                  </Hours>
                  <Location>{lieu}</Location>
                </DateAndHours>
                <AcceptedBadge>&#x2714;</AcceptedBadge>
              </Invitation>
            </>
          )}
          {datafetchInvit && status === 'refused' && (
            <>
              <Rejected>Refusé</Rejected>
              <Invitation>
                <Inviter>
                  {inviter_name} {inviter_lastname}
                </Inviter>
                <DateAndHours>
                  {day + ' . '}
                  {month + ' . '}
                  {year}
                  <Hours>
                    {hour + ' : '}
                    {minute}
                  </Hours>
                  <Location>{lieu}</Location>
                </DateAndHours>
                <RefusedBadge>&#x2716;</RefusedBadge>
              </Invitation>
            </>
          )}
        </InviationReceivedWrapper>
        <InvitationSendedWrapper>
          <TitleSended>ENVOYÉES</TitleSended>
          {datafetchInvitSended && statusSended === 'in progress' && (
            <>
              <InProgress>En attente de réponse:</InProgress>
              <Invitation>
                <Inviter>
                  {invited_nameSended} {invited_lastnameSended}
                </Inviter>
                <DateAndHours>
                  {daySended + ' . '}
                  {monthSended + ' . '}
                  {yearSended}
                  <Hours>
                    {hourSended + ' : '}
                    {minuteSended}
                  </Hours>
                  <Location>{lieuSended}</Location>
                </DateAndHours>
                <WaitingBadge>&#x2026;</WaitingBadge>
              </Invitation>
            </>
          )}
          {datafetchInvitSended && statusSended === 'accepted' && (
            <>
              <Accepted>Acceptées</Accepted>
              <Invitation>
                <Inviter>
                  {invited_nameSended} {invited_lastnameSended}
                </Inviter>
                <DateAndHours>
                  {daySended + ' . '}
                  {monthSended + ' . '}
                  {yearSended}
                  <Hours>
                    {hourSended + ' : '}
                    {minuteSended}
                  </Hours>
                  <Location>{lieuSended}</Location>
                </DateAndHours>
                <AcceptedBadge>&#x2714;</AcceptedBadge>
              </Invitation>
            </>
          )}
          {datafetchInvit && statusSended === 'refused' && (
            <>
              <Rejected>Rejetées</Rejected>
              <Invitation>
                <Inviter>
                  {invited_nameSended} {invited_lastnameSended}
                </Inviter>
                <DateAndHours>
                  {daySended + ' . '}
                  {monthSended + ' . '}
                  {yearSended}
                  <Hours>
                    {hourSended + ' : '}
                    {minuteSended}
                  </Hours>
                  <Location>{lieuSended}</Location>
                </DateAndHours>
                <RefusedBadge>&#x2716;</RefusedBadge>
              </Invitation>
            </>
          )}
        </InvitationSendedWrapper>
      </InvitationsWrapper>
    </div>
  );
}
