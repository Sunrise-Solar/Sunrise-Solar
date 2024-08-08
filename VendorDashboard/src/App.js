// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VendorApp from './components/Vendor_Dashboard/VendorApp';
// import CustomerApp from './components/Customer_Dashboard/CustomerApp';
// import PlaceOrder from './components/Customer_Dashboard/PlaceOrder';
// import RequestForm from './components/Customer_Dashboard/RequestForm';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/vendor-dashboard" />} />
        <Route path="/vendor-dashboard/*" element={<VendorApp />} />
         {/* <Route path="/place-order" element={<PlaceOrder />} /> 
        <Route path="/send-request" element={<RequestForm />} />   */}
        
      </Routes>
    </Router>
  );
};

export default App;
