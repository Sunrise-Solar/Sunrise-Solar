import React, { useState } from 'react';
import CustomerRegistrationForm from './CustomerRegistrationForm';

function VendorRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = 'First name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!companyId) {
      errors.companyId = 'Company ID is required';
    }
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form data to the server
      console.log('Form submitted:', {
        firstName,
        lastName,
        companyId,
        username,
        mobileNumber,
        password,
      });
    }
  };

  return (


    <div className="container" style={{ backgroundColor: 'grey', opacity: '0.9' }}>
    <div className="row">
      <div className="col-6">
        <p style={{ color: 'white', fontSize: '40px' }}>Customer</p>
        <hr />
        <CustomerRegistrationForm></CustomerRegistrationForm>
      </div>
      <div className="col-6">
        <p>Vendor</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="Enter first name"
            />
            {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Enter last name"
            />
            {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
          </label>
          <br />
          <label>
            Company ID:
            <input
              type="text"
              value={companyId}
              onChange={(event) => setCompanyId(event.target.value)}
              placeholder="Enter company ID"
            />
            {errors.companyId && <div style={{ color: 'red' }}>{errors.companyId}</div>}
          </label>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
            />
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          </label>
          <br />
          <label>
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              placeholder="Enter mobile number"
            />
            {errors.mobileNumber && <div style={{ color: 'red' }}>{errors.mobileNumber}</div>}
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Enter confirm password"
            />
            {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>






  );
}

export default VendorRegistrationForm;