// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const Orders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetch('/api/orders')
//             .then(response => response.json())
//             .then(data => setOrders(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className="container-xl px-4 mt-4">
//             <div className="card mb-4">
//                 <div className="card-body">
//                     <h2>Orders</h2>
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Oid</th>
//                                 <th>Qid</th>
//                                 <th>C name</th>
//                                 <th>V name</th>
//                                 <th>Company</th>
//                                 <th>Site Address</th>
//                                 <th>Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order, index) => (
//                                 <tr key={index}>
//                                     <td>{order.oid}</td>
//                                     <td>{order.qid}</td>
//                                     <td>{order.customerName}</td>
//                                     <td>{order.vendorName}</td>
//                                     <td>{order.company}</td>
//                                     <td>{order.siteAddress}</td>
//                                     <td>{order.amount}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Orders;
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
                amount: '$1500'
            },
            {
                oid: 'ORD002',
                qid: 'QID002',
                customerName: 'Bob Johnson',
                vendorName: 'Jane Doe',
                company: 'Innovate Ltd',
                siteAddress: '5678 Oak St, Metropolis, USA',
                amount: '$2000'
            },
            {
                oid: 'ORD003',
                qid: 'QID003',
                customerName: 'Charlie Brown',
                vendorName: 'Alice Johnson',
                company: 'Enterprise Inc',
                siteAddress: '9101 Pine St, Gotham, USA',
                amount: '$3000'
            }
        ];

        setOrders(hardcodedOrders);
    }, []);

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
                                <th>C name</th>
                                <th>V name</th>
                                <th>Company</th>
                                <th>Site Address</th>
                                <th>Amount</th>
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
