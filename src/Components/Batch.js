import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import product_img from '../Images/product.jpg';
import Navbar from './Navbar';


function Batch() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };


  const timeSlots = ['8:00 AM - 8:40 AM', '5:00 PM - 5:40 PM'];

  return (
    <>
      <Navbar />
      <div className="box my-3 p-5">
        <div className='container align-item-center my-5 '>
          <div className="d-flex flex-column justify-content-center">
            <h2>Yoga for Mind</h2>
            <img src={product_img} alt="Not found" />
            <b>What is Yoga for Mind ?</b>
            <p>The yoga for mind session involves minimal physical movement and focuses on techniques such as Pranayama and meditation. It is suitable for women who cannot perform more physical forms of yoga and are looking for relief from concerns such as stress, anxiety, and low mood.</p>
            <div className="dropdown">
              <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedPlan ? selectedPlan : 'Choose Plan'}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handlePlanChange('1 Month')}>1 Month</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handlePlanChange('3 Month')}>3 Month</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handlePlanChange('6 Month')}>6 Month</a></li>
              </ul>
            </div>

            {/* Date Picker */}
            <div className="mt-3">
              <label className="me-2">Select Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
              />
            </div>

            {/* Time Slot Dropdown */}
            <div className="mt-3">
              <label className="me-2 my-2">Select Time Slot:</label>
              <select
                className="form-select"
                value={selectedTimeSlot}
                onChange={(e) => handleTimeSlotChange(e.target.value)}
              >
                <option value="" disabled>Select Time Slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-danger my-3" type="button" aria-expanded="false">
              Buy Package
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Batch;
