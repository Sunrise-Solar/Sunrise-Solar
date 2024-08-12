import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
    'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
];

const Quotations = () => {
    const navigate = useNavigate();
    const [quotations, setQuotations] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchQuotations = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found, please log in again.');
                }

                const response = await axios.get('http://localhost:8282/customer/getquotes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setQuotations(response.data);
            } catch (error) {
                console.error('Error fetching quotations:', error);
                setMessage('Error fetching quotations.');
            }
        };

        fetchQuotations();
    }, []);

    const handlePlaceOrder = (quotation) => {
        console.log('Place order for:', quotation);
        navigate('/place-order', { state: { quotation } });
    };

    // const handleDownloadQuote = (quotation) => {
    //     console.log('Download quote:', quotation);
    //     fetch(quotation.quotationPdf, { method: 'HEAD' })
    //         .then(response => {
    //             if (response.ok) {
    //                 const link = document.createElement('a');
    //                 link.href = quotation.quotationPdf;
    //                 link.download = `Quotation_${quotation.id}.pdf`; // Set the download file name
    //                 document.body.appendChild(link);
    //                 link.click();
    //                 document.body.removeChild(link);
    //                 setMessage('File downloaded successfully.'); // Set success message
    //             } else {
    //                 setMessage(`File not present for quotation ID: ${quotation.id}`);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching the quotation PDF:', error);
    //             setMessage('Error fetching the quotation PDF.');
    //         });
    // };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Quotations</h2>
            {message && (
                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'} alert-dismissible`} role="alert">
                    {message}
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setMessage('')}></button>
                </div>
            )}
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {quotations.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.name || 'N/A'}</td>
                            <td>{row.email || 'N/A'}</td>
                            <td>{row.mobile || 'N/A'}</td>
                            <td>{row.company || 'N/A'}</td>
                            <td>{row.amount || 'N/A'}</td>
                            <td>{row.deliveryDate || 'N/A'}</td>
                            <td>
                                <a href={row.quotationPdf} target="_blank" rel="noopener noreferrer">View PDF</a>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-primary me-2" 
                                    onClick={() => handlePlaceOrder(row)}
                                >
                                    Place Order
                                </button>
                                {/* <button 
                                    className="btn btn-success" 
                                    onClick={() => handleDownloadQuote(row)}
                                >
                                    Download Quote
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Quotations;
