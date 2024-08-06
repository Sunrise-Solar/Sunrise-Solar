import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import Home from './components/home';
import VendorRegistrationForm from './components/VendorRegistrationForm';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custRegistration" element={<CustomerRegistrationForm />} />
        <Route path="/venderRegistration" element={<VendorRegistrationForm />} />
        {/* <Route path="/login" element={< />} /> */}
      </Routes>
    </Router>
  );
};

export default App;