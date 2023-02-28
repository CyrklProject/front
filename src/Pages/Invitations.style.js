import styled from 'styled-components';

export const InvitationsWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 800px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const InviationReceivedWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  min-height: 800px;
  flex-direction: column;
  padding-left: 20%;
`;

export const InvitationSendedWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  min-height: 800px;
  flex-direction: column;
  padding-left: 5%;
`;

export const TitleReceived = styled.p`
  width: 50%;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  letter-spacing: 0.155em;
  color: #9caf88;
  padding: 30px;
  border-bottom: 1px solid;
  border-color: #9caf88;
`;

export const TitleSended = styled.p`
  width: 50%;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  letter-spacing: 0.155em;
  color: #9caf88;
  padding: 30px;
  border-bottom: 1px solid;
  border-color: #9caf88;
`;

export const InProgress = styled.p`
  display: flex;
  margin: 0;
  width: 270px;
  color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;

export const Accepted = styled.p`
  display: flex;
  margin: 0;
  width: 270px;
  color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;

export const Rejected = styled.p`
  display: flex;
  margin: 0;
  width: 270px;
  color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;

export const Hours = styled.div`
  color: black;
  margin: 0;
  margin-left: 24%;
  margin-top: 15%;
`;

export const Location = styled.p`
  color: black;
  margin: 0;
  font-weight: bold;
  margin-left: 18%;
  margin-top: 15%;
  width: 80px;
`;

export const Invitation = styled.div`
  display: flex;
  margin-top: 3%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: #9caf88;
`;

export const Inviter = styled.p`
  color: #173f35;
  font-weight: bold;
`;

export const DateAndHours = styled.p`
  margin: 4%;
`;

export const ButtonAccepted = styled.p`
  display: flex;
  background-color: rgba(32, 55, 90, 0.69);
  height: 44px;
  width: 44px;
  border-radius: 30px;
  width: 5em;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;

export const ButtonRefused = styled.p`
  display: flex;
  background-color: #d5b19e;
  height: 44px;
  width: 44px;
  border-radius: 30px;
  width: 5em;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const AcceptedBadge = styled.p`
  display: flex;
  background-color: rgba(32, 55, 90, 0.69);
  height: 44px;
  width: 44px;
  border-radius: 30px;
  width: 3em;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;

export const RefusedBadge = styled.p`
  display: flex;
  background-color: #d5b19e;
  height: 44px;
  width: 44px;
  border-radius: 30px;
  width: 3em;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;

export const WaitingBadge = styled.p`
  display: flex;
  background-color: #9caf88;
  height: 44px;
  width: 44px;
  border-radius: 30px;
  width: 3em;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;
