import React, { useState } from 'react';
import './Orders.css'; // Import custom styles if needed

const Orders = () => {
    // Hardcoded data for orders
    const initialOrders = [
        {
            orderId: 'ORD001',
            Oid: 'ORD001',
            Qid: 'QID001',
            Cname: 'Alice Smith',
            Vname: 'John Doe',
            Company: 'Tech Corp',
            SiteAddress: '1234 Elm St, Springfield, USA',
            Amount: '$1500',
            Status: 'Pending'
        },
        {
            orderId: 'ORD002',
            Oid: 'ORD002',
            Qid: 'QID002',
            Cname: 'Bob Johnson',
            Vname: 'Jane Doe',
            Company: 'Innovate Ltd',
            SiteAddress: '5678 Oak St, Metropolis, USA',
            Amount: '$2000',
            Status: 'Completed'
        },
        {
            orderId: 'ORD003',
            Oid: 'ORD003',
            Qid: 'QID003',
            Cname: 'Charlie Brown',
            Vname: 'Alice Johnson',
            Company: 'Enterprise Inc',
            SiteAddress: '9101 Pine St, Gotham, USA',
            Amount: '$3000',
            Status: 'Pending'
        }
    ];

    const [orders, setOrders] = useState(initialOrders);

    const handleRequestPayment = (orderId) => {
        // Update order status to "Completed"
        setOrders(orders.map(order =>
            order.orderId === orderId ? { ...order, Status: 'Completed' } : order
        ));
    };

    const columns = [
        'Oid', 'Qid', 'C name', 'V name', 'Company', 'Site Address', 'Amount', 'Status', 'Action'
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
                            <td>{order.Status}</td>
                            <td>
                                {order.Status === 'Pending' && (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleRequestPayment(order.orderId)}
                                    >
                                        Request Payment
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
