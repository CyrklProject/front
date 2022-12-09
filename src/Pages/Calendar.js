import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function DatePickerS() {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => setDate(date);

  return <DatePicker selected={date} onChange={handleChange} />;
}
