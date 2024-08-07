import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
    'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
];

const Quotations = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const data = [
        {
            id: 1,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            mobile: '555-1234',
            company: 'Tech Solutions',
            amount: '$2000',
            deliveryDate: '2024-09-15',
            quotationPdf: 'https://example.com/path/to/quotation1.pdf', // Replace with a valid URL
        },
        {
            id: 2,
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            mobile: '555-5678',
            company: 'Green Energy',
            amount: '$1500',
            deliveryDate: '2024-10-01',
            quotationPdf: 'https://example.com/path/to/quotation2.pdf', // Replace with a valid URL
        },
    ];

    const handlePlaceOrder = (quotation) => {
        console.log('Place order for:', quotation);
        navigate('/place-order', { state: { quotation } });
    };

    const handleDownloadQuote = (quotation) => {
        console.log('Download quote:', quotation);
        // Check if the URL is valid before attempting to download
        fetch(quotation.quotationPdf, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    const link = document.createElement('a');
                    link.href = quotation.quotationPdf;
                    link.download = `Quotation_${quotation.id}.pdf`; // Set the download file name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setMessage('File downloaded successfully.'); // Set success message
                } else {
                    setMessage(`File not present for quotation ID: ${quotation.id}`);
                }
            })
            .catch(error => {
                console.error('Error fetching the quotation PDF:', error);
                setMessage('Error fetching the quotation PDF.');
            });
    };

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
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.slice(0, -1).map((column, colIndex) => (
                                <td key={colIndex}>
                                    {row[column.toLowerCase().replace(/\s/g, '')] || 'N/A'}
                                </td>
                            ))}
                            <td>
                                <button 
                                    className="btn btn-primary me-2" 
                                    onClick={() => handlePlaceOrder(row)}
                                >
                                    Place Order
                                </button>
                                <button 
                                    className="btn btn-success" 
                                    onClick={() => handleDownloadQuote(row)}
                                >
                                    Download Quote
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Quotations;
