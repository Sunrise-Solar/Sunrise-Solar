import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registrationForm.css'; // Custom CSS file if needed

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
    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!companyId) errors.companyId = 'Company ID is required';
    if (!username) errors.username = 'Username is required';
    if (!mobileNumber) errors.mobileNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(mobileNumber)) errors.mobileNumber = 'Invalid mobile number';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters long';
    if (!confirmPassword) errors.confirmPassword = 'Confirm password is required';
    else if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match';
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
    <section className=" gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Vendor Registration Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-lg"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="companyId"
                          className="form-control form-control-lg"
                          value={companyId}
                          onChange={(e) => setCompanyId(e.target.value)}
                        />
                        <label className="form-label" htmlFor="companyId">Company ID</label>
                        {errors.companyId && <div style={{ color: 'red' }}>{errors.companyId}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="username"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="username">Username</label>
                        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="mobileNumber"
                          className="form-control form-control-lg"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                        {errors.mobileNumber && <div style={{ color: 'red' }}>{errors.mobileNumber}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="confirmPassword"
                          className="form-control form-control-lg"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VendorRegistrationForm;
