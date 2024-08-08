import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialRequests = [
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        mobile: '1234567890',
        propertyType: 'Residential',
        address: '123 Elm Street, Springfield',
        electricityBill: '$100',
        electricityConsumption: '500 kWh'
    },
    {
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        mobile: '0987654321',
        propertyType: 'Commercial',
        address: '456 Oak Avenue, Metropolis',
        electricityBill: '$200',
        electricityConsumption: '1500 kWh'
    },
    // Add more hardcoded data as needed
];

const Requests = () => {
    const [requests, setRequests] = useState(initialRequests);

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
                                <th>Actions</th> {/* Add Actions column */}
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.name}</td>
                                    <td>{request.email}</td>
                                    <td>{request.mobile}</td>
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
                            ))}
                        </tbody>
                    </table>
                    {/* Button below the table */}
                    <div className="text-end">
                        <Link to="/send-request" className="btn btn-primary">
                            Send Request
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requests;
