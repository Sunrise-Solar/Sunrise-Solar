import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Profile from './components/Vendor_Dashboard/Profile';
import Requests from './components/Vendor_Dashboard/Requests';
import Quotations from './components/Vendor_Dashboard/Quotations';
import Orders from './components/Vendor_Dashboard/Orders';
import LogoutButton from './components/Vendor_Dashboard/LogoutButton';
import SendQuoteForm from './components/Vendor_Dashboard/SendQuoteForm'; // Import the SendQuoteForm component
import './Vendor_App.css';

const App = () => {
    const [showSendQuoteForm, setShowSendQuoteForm] = useState(false);

    const handleSendQuoteToggle = () => {
        setShowSendQuoteForm(!showSendQuoteForm);
    };

    const handleBackClick = () => {
        setShowSendQuoteForm(false);
    };

    return (
        <Router>
            <div className="app">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center w-100">
                            <h1 className="text-white mb-0">Vendor Dashboard</h1>
                        </div>
                        <Nav>
                            {showSendQuoteForm ? (
                                <Button variant="secondary" onClick={handleBackClick} className="me-2">
                                    Back
                                </Button>
                            ) : (
                                <>
                                    <Button variant="primary" onClick={handleSendQuoteToggle} className="me-2">
                                        Send Quote
                                    </Button>
                                    <LogoutButton />
                                </>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid>
                    <div className="d-flex">
                        {!showSendQuoteForm && (
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
                            {showSendQuoteForm ? (
                                <SendQuoteForm onSubmit={(data) => console.log(data)} />
                            ) : (
                                <Routes>
                                    <Route path="/" element={<Profile profile={sampleProfile} />} />
                                    <Route path="/profile" element={<Profile profile={sampleProfile} />} />
                                    <Route path="/requests" element={<Requests requests={sampleRequests} />} />
                                    <Route path="/quotations" element={<Quotations quotations={sampleQuotations} />} />
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
    company: 'Example Co.',
    address: '123 Main St, Anytown, USA'
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

const sampleQuotations = [
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        mobile: '1231231234',
        company: 'Tech Solutions',
        amount: '$5000',
        deliveryDate: '2024-08-15',
        quotationPDF: 'path/to/quotation1.pdf'
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
