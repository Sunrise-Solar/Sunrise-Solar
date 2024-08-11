
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import Home from './components/home';
import VendorRegistrationForm from './components/VendorRegistrationForm';
import Loginform from './components/loginform';
import VendorApp from './components/Vendor_Dashboard/VendorApp';
import CustomerApp from './components/Customer_Dashboard/CustomerApp';
import Registration from './components/Registration';
import PlaceOrder from './components/Customer_Dashboard/PlaceOrder';
import RequestForm from './components/Customer_Dashboard/RequestForm';
import About from './components/About';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const [userType, setUserType] = useState(null); // 'vendor', 'customer', or null

  // Redirect to appropriate dashboard if userType is set
  const ProtectedRoute = ({ children }) => {
    return userType ? children : <Navigate to="/loginform" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custRegistration" element={<CustomerRegistrationForm />} />
        <Route path="/vendorRegistration" element={<VendorRegistrationForm />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/place-order" element={<PlaceOrder />} /> 
        <Route path="/send-request" element={<RequestForm />} />  
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/About" element={<About />} /> 
        
        <Route 
          path="/vendor-dashboard" 
          element={
            <ProtectedRoute role="vendor">
              <VendorApp />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customer-dashboard" 
          element={
            <ProtectedRoute role="customer">
              <CustomerApp />
            </ProtectedRoute>
          } 
        />
        
      </Routes>
    </Router>
  );
};

export default App;
