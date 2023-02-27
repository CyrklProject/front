import { useState, useEffect } from 'react';
import {
  InvitationsWrapper,
  InviationReceivedWrapper,
  InvitationSendedWrapper,
  TitleReceived,
  TitleSended,
  InProgress,
  Accepted,
  Rejected
} from './Invitations.style';

export default function Inviations() {
  const [datafetchInvit, setDatafetchInvit] = useState([]);
  // const [userLoginId, setUserLoginId] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userID');

    if (userId) {
      fetch(`http://188.165.238.74:8080//invitationsreceived/user/${userId}`, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((response) => response.json())
        .then((data) => setDatafetchInvit(data[0]))
        .catch((error) => console.error('Error:', error));
    }
  }, []);

  console.log(datafetchInvit);

  return (
    <InvitationsWrapper>
      <InviationReceivedWrapper>
        <TitleReceived>REÇUES</TitleReceived>
        <InProgress>Nouvelles invitations</InProgress>
        <Accepted>Acceptées</Accepted>
        <Rejected>Rejetées</Rejected>
      </InviationReceivedWrapper>
      <InvitationSendedWrapper>
        <TitleSended>ENVOYÉES</TitleSended>
        <InProgress>En attentes de réponse:</InProgress>
        <Accepted>Acceptées</Accepted>
        <Rejected>Rejetées</Rejected>
      </InvitationSendedWrapper>
    </InvitationsWrapper>
  );
}
