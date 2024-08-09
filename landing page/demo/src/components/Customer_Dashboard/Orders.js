import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Hardcoded data for orders
        const hardcodedOrders = [
            {
                oid: 'ORD001',
                qid: 'QID001',
                customerName: 'Alice Smith',
                vendorName: 'John Doe',
                company: 'Tech Corp',
                siteAddress: '1234 Elm St, Springfield, USA',
                amount: '$1500',
                status: 'Pending' // New field added
            },
            {
                oid: 'ORD002',
                qid: 'QID002',
                customerName: 'Bob Johnson',
                vendorName: 'Jane Doe',
                company: 'Innovate Ltd',
                siteAddress: '5678 Oak St, Metropolis, USA',
                amount: '$2000',
                status: 'Completed' // New field added
            },
            {
                oid: 'ORD003',
                qid: 'QID003',
                customerName: 'Charlie Brown',
                vendorName: 'Alice Johnson',
                company: 'Enterprise Inc',
                siteAddress: '9101 Pine St, Gotham, USA',
                amount: '$3000',
                status: 'Pending' // New field added
            }
        ];

        setOrders(hardcodedOrders);
    }, []);

    const handleCompletePayment = (oid) => {
        // Update order status to "Completed"
        setOrders(orders.map(order =>
            order.oid === oid ? { ...order, status: 'Completed' } : order
        ));
    };

    return (
        <div className="container-xl px-4 mt-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2>Orders</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Oid</th>
                                <th>Qid</th>
                                <th>C Name</th>
                                <th>V Name</th>
                                <th>Company</th>
                                <th>Site Address</th>
                                <th>Amount</th>
                                <th>Status</th> {/* New column */}
                                <th>Action</th> {/* New column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.oid}</td>
                                    <td>{order.qid}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.vendorName}</td>
                                    <td>{order.company}</td>
                                    <td>{order.siteAddress}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.status}</td> {/* New status column */}
                                    <td>
                                        {order.status === 'Pending' && (
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleCompletePayment(order.oid)}
                                            >
                                                Complete Payment
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
