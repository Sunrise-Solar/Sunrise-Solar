import React from 'react';
import Table from './components/Table'; // Adjusted the import path
import './Requests.css';

const Requests = ({ requests }) => {
    const columns = [
        'Name', 'Email', 'Mobile', 'Property Type', 'Address', 'Electricity Bill', 'Electricity Consumption'
    ];

    return (
        <div className="requests">
            <h2>Requests</h2>
            <Table columns={columns} data={requests} />
        </div>
    );
};

export default Requests;
