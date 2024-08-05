import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './Orders.css';

const Orders = ({ orders }) => {
    return (
        <div className={`container-xl px-4 mt-4 ${styles.container}`}>
            <div className={`card mb-4 ${styles.card}`}>
                <div className={`card-body ${styles.cardBody}`}>
                    <h2>Orders</h2>
                    <table className={`table table-striped ${styles.table}`}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Order Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.orderId}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.status}</td>
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
