import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ selectedDate, onSelectDateTime }) => {
  const handleDateChange = (date) => {
    onSelectDateTime(date); // Pass the selected date to the parent component
  };

  return (
    <div className='my-4 border border-solid p-2 py-2'>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default DateTimePicker;
