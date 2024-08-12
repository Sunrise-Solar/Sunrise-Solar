import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Requests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found, please log in again.');
                }

                const response = await axios.get('http://localhost:8282/customer/getrequests', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                console.log('Fetched requests:', response.data);
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []); // Empty dependency array ensures this runs once on component mount

    const handleDelete = (index) => {
        const updatedRequests = requests.filter((_, i) => i !== index);
        setRequests(updatedRequests);
    };

    return (
        <div className="container-xl px-4 mt-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2>Requests</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Property Type</th>
                                <th>Address</th>
                                <th>Electricity Bill</th>
                                <th>Electricity Consumption</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map((request, index) => (
                                    <tr key={index}>
                                        <td>{request.customer.firstName} {request.customer.lastName}</td>
                                        <td>{request.customer.email}</td>
                                        <td>{request.customer.mobile}</td>
                                        <td>{request.propertyType}</td>
                                        <td>{request.address}</td>
                                        <td>{request.electricityBill}</td>
                                        <td>{request.electricityConsumption}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger" 
                                                onClick={() => handleDelete(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No requests found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="text-end">
                        <Link to="/send-request" className="btn btn-primary">
                            Add Request
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requests;
