import React from 'react';
import Table from './components/Table'; // Adjusted the import path
import './Orders.css';

const Orders = ({ orders }) => {
    const columns = [
        'Order ID', 'Customer Name', 'Order Date', 'Amount', 'Status'
    ];

    return (
        <div className="orders">
            <h2>Orders</h2>
            <Table columns={columns} data={orders} />
        </div>
    );
};

export default Orders;
