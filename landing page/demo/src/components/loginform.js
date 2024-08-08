import React, { useState } from 'react';

function Loginform() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('vendor');
  const [errors, setErrors] = useState({});
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
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
        email,
        password,
        userType,
      });
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    if (!forgotPasswordEmail) {
      setErrors({ forgotPasswordEmail: 'Email is required' });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(forgotPasswordEmail)) {
      setErrors({ forgotPasswordEmail: 'Invalid email address' });
    } else {
      // Send forgot password email to the server
      console.log('Forgot password email sent:', forgotPasswordEmail);
    }
  };

  return (
    <div className="container" style={{backgroundColor:'grey',opacity:'1', width:'80%' ,height:'100vh'}}>
    <div className="row justify-content-center">
      <div className="col-md-6" style={{color:'black', marginTop:'5rem'}}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email} style={{backgroundColor:'orange', opacity:'0.5'}}
              onChange={(event) => setEmail(event.target.value)}
              placeholder=" Enter email" 
              className="form-control"
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password} style={{backgroundColor:'orange', opacity:'0.5'}}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="form-control"
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <div className="form-group">
            <label>User Type:</label>
            <select
              value={userType}style={{backgroundColor:'orange', opacity:'0.5'}}
              onChange={(event) => setUserType(event.target.value)}
              className="form-control"
            >
              <option value="vendor">Vendor</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop:'2rem'}}>
            Login
          </button>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setForgotPassword(true)}
            style={{marginTop:'2rem'}}
          >
            Forgot Password?
          </button>
        </form>
        {forgotPassword && (
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label>Enter your email:</label>
              <input
                type="email"
                value={forgotPasswordEmail}
                onChange={(event) => setForgotPasswordEmail(event.target.value)}
                placeholder="Enter email"
                className="form-control"
              />
              {errors.forgotPasswordEmail && (
                <div style={{ color: 'red' }}>{errors.forgotPasswordEmail}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Send Forgot Password Email
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
  );
}

export default Loginform;