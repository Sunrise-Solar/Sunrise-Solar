import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Requests from './Requests';
import Quotations from './Quotations';
import Orders from './Orders';
import LogoutButton from '../Vendor_Dashboard/LogoutButton';
import './CustomerApp.css';
import PlaceOrder from './PlaceOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestForm from './RequestForm';

const CustomerApp = () => {
    const [profile] = useState({ /* your profile data */ });
    const [requests] = useState([ /* your requests data */ ]);
    const [quotations] = useState([ /* your quotations data */ ]);
    const [orders] = useState([ /* your orders data */ ]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar className="custom-navbar" expand="lg">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand className="custom-brand" href="#home">Customer Dashboard</Navbar.Brand>
                    <Nav>
                        <LogoutButton />
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid className="d-flex flex-grow-1">
                <div className="sidebar bg-midnight-blue text-white p-3" style={{ width: '200px' }}>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="profile" className="text-white">Profile</Nav.Link>
                        <Nav.Link as={Link} to="requests" className="text-white">Requests</Nav.Link>
                        <Nav.Link as={Link} to="quotations" className="text-white">Quotations</Nav.Link>
                        <Nav.Link as={Link} to="orders" className="text-white">Orders</Nav.Link>
                    </Nav>
                </div>
                <div className="flex-grow-1 p-4">
                    <Routes>
                        <Route path="profile" element={<Profile profile={profile} />} />
                        <Route path="requests" element={<Requests requests={requests} />} />
                        <Route path="quotations" element={<Quotations quotations={quotations} />} />
                        <Route path="orders" element={<Orders orders={orders} />} />
                        <Route path="place-order" element={<PlaceOrder />} />
                        <Route path="send-request" element={<RequestForm />} />
                    </Routes>
                </div>
            </Container>
        </div>
    );
};

export default CustomerApp;
