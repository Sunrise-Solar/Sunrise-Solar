// Requests.js
import React from 'react';
import './Requests.css';

const Requests = ({ requests, onSendQuote }) => {
    const columns = [
        'Name', 'Email', 'Mobile', 'Property Type', 'Address', 'Electricity Bill', 'Electricity Consumption', 'Actions'
    ];

    return (
        <div className="requests">
            <h2>Requests</h2>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
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
                                <button onClick={() => onSendQuote(request)}>Send Quote</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Requests;
