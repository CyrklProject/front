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
  Photos,
  PhotoProfil,
  NameBox,
  Sector,
  Name,
  TitlteSector,
  ParaSector,
  Experience,
  Description,
  TitleExperience,
  SmallPhotoProfil,
  InfosExperienceBox,
  Status,
  Entreprise,
  Duration,
  WrapperExperience,
  ButtonSwipeCross,
  ButtonSwipeStar,
  ButtonSwipeDiner
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
        <PhotoProfil>
          <div>photo du profil</div>
        </PhotoProfil>
        <NameBox>
          <Name>Oussama Ammar</Name>
        </NameBox>
        <Sector>
          <TitlteSector>SECTEUR/BESOIN/OFFRE</TitlteSector>
          <ParaSector>
            Conference Speaker, Financement de startups, Conseil aux entreprises
          </ParaSector>
        </Sector>
      </CenterContent>
      <RightContent>
        <Experience>
          <TitleExperience>EXPÉRIENCE</TitleExperience>
          <WrapperExperience>
            <SmallPhotoProfil>photo</SmallPhotoProfil>
            <InfosExperienceBox>
              <Status>Co-founder et Director</Status>
              <Entreprise>The Familly - Temps plein</Entreprise>
              <Duration>Mars 2013 - aujourd’hui </Duration>
            </InfosExperienceBox>
          </WrapperExperience>
        </Experience>
        <Description>
          <div>Description</div>
        </Description>
      </RightContent>
      <Footer>
        <ButtonSwipeCross></ButtonSwipeCross>
        <ButtonSwipeStar></ButtonSwipeStar>
        <ButtonSwipeDiner></ButtonSwipeDiner>
      </Footer>
    </MatchingContainer>
  );
}
