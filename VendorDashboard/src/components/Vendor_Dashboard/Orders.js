// Orders.js
import React from 'react';
import './Orders.css'; // Import custom styles if needed

const Orders = ({ orders }) => {
    const columns = [
        'Oid', 'Qid', 'C name', 'V name', 'Company', 'Site Address', 'Amount'
    ];

    return (
        <div className="orders">
            <h2>Orders</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.Oid}</td>
                            <td>{order.Qid}</td>
                            <td>{order.Cname}</td>
                            <td>{order.Vname}</td>
                            <td>{order.Company}</td>
                            <td>{order.SiteAddress}</td>
                            <td>{order.Amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
