import React from 'react';
import './Quotation.css';

const columns = [
    'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
];

const data = [
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        mobile: '1231231234',
        company: 'Tech Solutions',
        amount: '$5000',
        deliveryDate: '2024-08-15',
        quotationPDF: 'path/to/quotation1.pdf'
    }
];

const Quotations = () => {
    const handlePlaceOrder = (quotation) => {
        console.log('Place order for:', quotation);
        // Add logic to place the order
    };

    const handleDownloadQuote = (quotation) => {
        console.log('Download quote:', quotation);
        // Add logic to download the quote
    };

    return (
        <div className="quotation-container">
            <h2>Quotations</h2>
            <table className="quotation-table">
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
                                    {row[column.toLowerCase().replace(/\s/g, '')]}
                                </td>
                            ))}
                            <td>
                                <button onClick={() => handlePlaceOrder(row)}>Place Order</button>
                                <button onClick={() => handleDownloadQuote(row)}>Download Quote</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Quotations;
