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
  border-bottom: 1px solid;
  border-color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;

export const Accepted = styled.p`
  display: flex;
  margin: 0;
  width: 270px;
  color: #9caf88;
  border-bottom: 1px solid;
  border-color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;

export const Rejected = styled.p`
  display: flex;
  margin: 0;
  width: 270px;
  color: #9caf88;
  border-bottom: 1px solid;
  border-color: #9caf88;
  padding-top: 20px;
  padding-bottom: 7%;
  font-weight: bold;
`;
