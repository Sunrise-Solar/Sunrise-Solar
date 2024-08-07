import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import Home from './components/home';
import VendorRegistrationForm from './components/VendorRegistrationForm';
import Loginform from './components/loginform';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custRegistration" element={<CustomerRegistrationForm />} />
        <Route path="/vendorRegistration" element={<VendorRegistrationForm />} />
        <Route path="/loginform" element={<Loginform />} />
      </Routes>
    </Router>
  );
};

export default App;