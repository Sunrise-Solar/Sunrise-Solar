import React from 'react';
import './Quotations.css';

const Quotations = ({ quotations, onDelete }) => {
    const columns = [
        'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
    ];

    // Add delete action to each quotation record
    const dataWithActions = quotations.map(quotation => ({
        ...quotation,
        Actions: (
            <button 
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(quotation.id)}
            >
                Delete
            </button>
        )
    }));

    return (
        <div className="quotations">
            <h2>Quotations</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataWithActions.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>
                                    {column === 'Actions' ? row[column] : row[column] || 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Quotations;
