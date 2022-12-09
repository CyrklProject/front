import { AvailabilityTitle, AvailabilityContainer } from './Availability.style';
import ControlledCarousel from '../components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Availability() {
  return (
    <AvailabilityContainer>
      <AvailabilityTitle>Quand êtes vous disponible pour déjeuner ?</AvailabilityTitle>
      Renseignez au moins 3 dates de disponibilité à déjeuner
      <ControlledCarousel />
    </AvailabilityContainer>
  );
}
