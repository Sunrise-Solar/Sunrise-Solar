import React from 'react';
import Table from './components/Table'; // Adjusted the import path
import './Quotations.css';

const Quotations = ({ quotations }) => {
    const columns = [
        'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF'
    ];

    return (
        <div className="quotations">
            <h2>Quotations</h2>
            <Table columns={columns} data={quotations} />
        </div>
    );
};

export default Quotations;
