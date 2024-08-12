import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css'; // Import custom styles if needed

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found, please log in again.');
                }

                const response = await axios.get('http://localhost:8282/vendor/getorders', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching orders.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleRequestPayment = (orderId) => {
        // Update order status to "Completed"
        setOrders(orders.map(order =>
            order.orderId === orderId ? { ...order, status: 'Completed' } : order
        ));
    };

    const columns = [
        'Oid', 'Qid', 'C name', 'V name', 'Company', 'Site Address', 'Amount', 'Status', 'Action'
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="orders">
            <h2>Orders</h2>
            <table className="table table-striped table-bordered">
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
