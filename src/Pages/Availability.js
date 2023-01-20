import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import Banner from '../components/Banner/Banner';

export default function Availability() {
  const [firstDate, setfirstDate] = useState(null);
  const handleChange = (firstDate) => setfirstDate(firstDate);
  const [firstHour, setfirstHour] = useState(null);

  return (
    <div className="availability-body">
      <Banner />
      <div className="availability-background">
        <div className="content-container">
          <div className="title">Quand êtes vous disponible pour déjeuner ?</div>
          <div className="subtitle">Renseignez au moins 3 dates de disponibilité à déjeuner</div>
          <div>
            <DatePicker
              isClearable
              closeOnScroll={true}
              dateFormat="dd mm yyyy"
              minDate={new Date()}
              selected={firstDate}
              onChange={handleChange}
              withPortal
              openToDate={new Date()}
              maxDate={addDays(new Date(), 90)}
              placeholderText="Click to select a date"
            />
            <div>Selected date={firstDate ? firstDate.toString() : null}</div>

            <DatePicker
              selected={firstHour}
              onChange={(firstHour) => setfirstHour(firstHour)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <div>Selected hour={firstHour ? firstHour.toString() : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
