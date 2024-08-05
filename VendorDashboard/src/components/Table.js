import React from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

const DataTable = ({ columns, data }) => {
    return (
        <div className="table-container">
            <Table striped bordered hover>
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
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column.toLowerCase().replace(/\s/g, '')]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;
