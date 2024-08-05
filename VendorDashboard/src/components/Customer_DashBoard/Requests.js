import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './Request.css';

const Requests = ({ requests }) => {
    return (
        <div className={`container-xl px-4 mt-4 ${styles.container}`}>
            <div className={`card mb-4 ${styles.card}`}>
                <div className={`card-body ${styles.cardBody}`}>
                    <h2>Requests</h2>
                    <table className={`table table-striped ${styles.table}`}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Property Type</th>
                                <th>Address</th>
                                <th>Electricity Bill</th>
                                <th>Electricity Consumption</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Requests;
