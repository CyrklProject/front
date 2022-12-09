import { AvailabilityTitle, AvailabilityContainer } from './Availability.style';
import DatePickerS from '../Pages/Calendar';

export default function Availability() {
  return (
    <AvailabilityContainer>
      <AvailabilityTitle>Quand êtes vous disponible pour déjeuner ?</AvailabilityTitle>
      Renseignez au moins 3 dates de disponibilité à déjeuner
      <DatePickerS />
    </AvailabilityContainer>
  );
}
