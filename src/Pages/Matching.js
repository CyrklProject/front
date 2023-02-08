import {
  MatchingContainer,
  LeftContent,
  CenterContent,
  RightContent,
  Footer,
  Disponibility,
  Relations,
  Contact,
  Paratitle,
  Date,
  Location,
  LinkDisponibilities,
  HowMany,
  Photos
} from './Matching.style';
import { Button } from '../components/Button/Button';

export default function Matching() {
  return (
    <MatchingContainer>
      <LeftContent>
        <Disponibility>
          <Paratitle>PROCHAINE DISPONIBILITÉ</Paratitle>
          <Date>Vend. 4 sept. 2020 à 12:30</Date>
          <Location>Paris (75002)</Location>
          <a href="./disponibilities">
            <LinkDisponibilities>Voir les autres disponibilités</LinkDisponibilities>
          </a>
        </Disponibility>
        <Relations>
          <HowMany>6 RELATIONS EN COMMUN</HowMany>
          <Photos></Photos>
        </Relations>
        <Contact>
          <a href="">
            <Button
              onClick={() => {
                console.log('working');
              }}
              type="button"
              buttonStyle="btn--primary--reverse"
              buttonSize="btn--medium">
              RECOMMANDER À UN CONTACT
            </Button>
          </a>
        </Contact>
      </LeftContent>
      <CenterContent>
        <div>popopo</div>
      </CenterContent>
      <RightContent></RightContent>
      <Footer>
        <div>dududu</div>
      </Footer>
    </MatchingContainer>
  );
}
