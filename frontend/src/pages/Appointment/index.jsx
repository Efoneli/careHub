import { useState } from 'react';
import avatarIcon from '../../assets/images/avatar-icon.png';
import DateTimePicker from './DateTime';

const Appointment = () => {
  // State to hold the selected date and note
  const [selectedDate, setSelectedDate] = useState('');
  const [note, setNote] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can use the selectedDate and note state values here for further processing
    setIsAppointmentBooked(true);
  };

  return (
    <>
      <div className="max-w-[1170px] px-5 mx-auto">
        <h2 className="heading text-center m-3">Book an Appointment</h2>
        <hr />
        <p className="text__para text-center p-2 mb-3">
          Confirm a date and time for your appointment with a practitioner.
          Include a note as well.
        </p>
        <h3 className="text__para font-bold">DOCTOR</h3>

        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 mb-3 lg:mt-[18px]">
          <img src={avatarIcon} alt="Doctor's Avatar" />
          <div className="flex flex-col">
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
              Alfaz Ahmed
            </h4>
            <p>MBBS, BCS, MD (Medical Director)</p>
          </div>
        </div>
        <hr />

        <h3 className="text__para font-bold">DATE & TIME</h3>
        <DateTimePicker
          selectedDate={selectedDate}
          onSelectDateTime={(date) => setSelectedDate(date)}
        />

        <hr />

        <form onSubmit={handleFormSubmit}>
          <label>
            <h3 className="text__para font-bold">NOTE</h3>
            <textarea
              className="border border-solid border-[#0066ff34] focus:outline outline outline-gray-50 w-full px-4"
              rows="5"
              placeholder="Please type your message"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </label>
          <div className="flex justify-center items-center">
            <button type="submit" className="btn flex items-center justify-center mb-6">
              Book Appointment
            </button>
          </div>
        </form>

        {/* Display the selected date and note */}
        {isAppointmentBooked && (
          <div className='mb-5 px-3 py-1 border border-solid border-blue-200'>
            <div className='sm:flex flex-col lg:flex-row justify-start text__para'>
              <h3>You have picked &nbsp; </h3><span></span>
              <p className='text-blue-700'>{selectedDate.toString()}</p><span className=''>&nbsp; for your Appointment.</span>
            </div>
            <div className='flex flex-col justify-start'>
              <h3 className='text__para font-bold'>Note to Doctor: </h3>
              <p className='text__para text-blue-600'>{note}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Appointment;
