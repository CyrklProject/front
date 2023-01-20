// import { useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-datepicker';

// export default function DatePickerS() {
//   const [date, setDate] = useState(null);
//   const handleChange = (date) => setDate(date);

//   return (
//     <div>
//       <DatePicker
//         isClearable
//         filterDate={(d) => {
//           return new Date() > d;
//         }}
//         showTimeSelect
//         closeOnScroll={true}
//         dateFormat="dd mm yyyy h:mmaa"
//         selected={date}
//         onChange={handleChange}
//         withPortal
//         openToDate={new Date(date)}
//         placeholderText="Click to select a date"
//         timeFormat="HH:mm"
//         timeIntervals={30}
//         timeCaption="time"
//       />
//       <div>Selected date={date ? date.toString() : null}</div>
//     </div>
//   );
// }
