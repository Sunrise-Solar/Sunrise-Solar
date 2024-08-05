import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Profile from './components/Customer_DashBoard/Profile';
import Requests from './components/Customer_DashBoard/Requests';
import Quotations from './components/Customer_DashBoard/Quotation';
import Orders from './components/Customer_DashBoard/Orders';
import LogoutButton from './components/Vendor_Dashboard/LogoutButton';
import PlaceOrder from './components/Customer_DashBoard/PlaceOrder'; 
import DownloadQuote from './components/Customer_DashBoard/DownloadQuote'; 
import './CustomerApp.css'; 

const App = () => {
    const [showPlaceOrder, setShowPlaceOrder] = useState(false);
    const [showDownloadQuote, setShowDownloadQuote] = useState(false);

    const handleBackClick = () => {
        setShowPlaceOrder(false);
        setShowDownloadQuote(false);
    };

    return (
        <Router>
            <div className="app">
                <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
                    <Container className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center w-100">
                            <h1 className="text-white mb-0">Customer Dashboard</h1>
                        </div>
                        <Nav>
                            {showPlaceOrder || showDownloadQuote ? (
                                <Button variant="secondary" onClick={handleBackClick} className="me-2">
                                    Back
                                </Button>
                            ) : (
                                <>
                                    <LogoutButton />
                                </>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid>
                    <div className="d-flex">
                        {!showPlaceOrder && !showDownloadQuote && (
                            <div className="sidebar bg-dark text-white">
                                <Nav className="flex-column">
                                    <Nav.Link as={Link} to="/profile" className="text-white">Profile</Nav.Link>
                                    <Nav.Link as={Link} to="/requests" className="text-white">Requests</Nav.Link>
                                    <Nav.Link as={Link} to="/quotations" className="text-white">Quotations</Nav.Link>
                                    <Nav.Link as={Link} to="/orders" className="text-white">Orders</Nav.Link>
                                </Nav>
                            </div>
                        )}
                        <div className="main-content">
                            {showPlaceOrder ? (
                                <PlaceOrder onSubmit={(data) => console.log(data)} />
                            ) : showDownloadQuote ? (
                                <DownloadQuote onSubmit={(data) => console.log(data)} />
                            ) : (
                                <Routes>
                                    <Route path="/" element={<Profile profile={sampleProfile} />} />
                                    <Route path="/profile" element={<Profile profile={sampleProfile} />} />
                                    <Route path="/requests" element={<Requests requests={sampleRequests} />} />
                                    <Route path="/quotations" element={<Quotations />} />
                                    <Route path="/orders" element={<Orders orders={sampleOrders} />} />
                                </Routes>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </Router>
    );
};

const sampleProfile = {
    firstName: 'John',
    lastName: 'Doe',
    mobile: '1234567890',
    email: 'john.doe@example.com',
    city: 'Metropolis',
    pincode: '12345'
};

const sampleRequests = [
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        mobile: '9876543210',
        propertyType: 'Residential',
        address: '456 Elm St, Othertown, USA',
        electricityBill: '$150',
        electricityConsumption: '350 kWh'
    }
];

const sampleOrders = [
    {
        orderId: 'ORD123',
        customerName: 'Bob Brown',
        orderDate: '2024-07-20',
        amount: '$1000',
        status: 'Shipped'
    }
];

export default App;
