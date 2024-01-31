import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useLocation, Link } from 'react-router-dom';

const Login = () => {
  const [userInput, setUserInput] = useState({ Phone: '', otp: '' });
  const [isOtpSent, setIsOtpSent] = useState(false);
  let location = useLocation();

  const handleChange = (value, event) => {
    const { name } = event.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSendOtp = () => {

    if (userInput.Phone && userInput.Phone.length >= 10) {
      // we have to add logic to send OTP 
      setIsOtpSent(true);
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };



  return (
    <div className='container'>
      <div>
        <h2 className='my-3'>Login to Your account</h2>
        <label className='my-3'>
          <PhoneInput
            placeholder="Enter phone number"
            value={userInput.Phone}
            onChange={(value) => handleChange(value, { target: { name: 'Phone' } })}
          />
        </label>
        {!isOtpSent ? (
          <div className='my-3'>
            <button type="button" className="btn btn-danger" onClick={handleSendOtp}>
              Send OTP
            </button>
          </div>
        ) : (
          <>
            <label>
              <b>OTP: </b>
              <input
                type="text"
                name="otp"
                value={userInput.otp}
                onChange={(e) => handleChange(e.target.value, e)}
              />
            </label>
            <div className='my-3'>
              <Link to="/home"> <button
                type="button"
                className="btn btn-danger"

                disabled={userInput.otp.length === 0}
              >
                Login
              </button></Link>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;