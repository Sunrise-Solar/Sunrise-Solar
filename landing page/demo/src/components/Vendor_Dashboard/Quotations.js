// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Quotations.css';

// const QuotationsPage = () => {
//     const [quotations, setQuotations] = useState([]);
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuotations = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) {
//                     throw new Error('No token found, please log in again.');
//                 }

//                 const response = await axios.get('http://localhost:8282/vendor/getquotes', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 setQuotations(response.data);
//             } catch (error) {
//                 console.error('Error fetching quotations:', error);
//                 setMessage('Error fetching quotations.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuotations();
//     }, []);

//     const handleDelete = async (quotationId) => {
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 throw new Error('No token found, please log in again.');
//             }

//             await axios.delete(`http://localhost:8282/vendor/deletequote/${quotationId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             // Update state by filtering out the deleted quotation
//             setQuotations((prevQuotations) => prevQuotations.filter((q) => q.id !== quotationId));
//         } catch (error) {
//             console.error('Error deleting quotation:', error);
//             setMessage('Error deleting quotation.');
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (message) {
//         return <div>{message}</div>;
//     }

//     if (!quotations.length) {
//         return <div>No quotations available.</div>;
//     }

//     const columns = [
//         'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
//     ];

//     // Add delete action to each quotation record
//     const dataWithActions = quotations.map(quotation => ({
//         ...quotation,
//         Actions: (
//             <button 
//                 className="btn btn-danger btn-sm"
//                 onClick={() => handleDelete(quotation.id)}
//             >
//                 Delete
//             </button>
//         )
//     }));

//     return (
//         <div className="container-xl px-4 mt-4">
//             <h2>Quotations</h2>
//             <table className="table table-striped table-bordered">
//                 <thead>
//                     <tr>
//                         {columns.map((column, index) => (
//                             <th key={index}>{column}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {dataWithActions.map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                             {columns.map((column, colIndex) => (
//                                 <td key={colIndex}>
//                                     {column === 'Actions' ? row[column] : row[column] || 'N/A'}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default QuotationsPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotations.css';

const QuotationsPage = () => {
    const [quotations, setQuotations] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuotations = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found, please log in again.');
                }

                const response = await axios.get('http://localhost:8282/vendor/getquotes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('API Response:', response.data); // Log API response to debug

                if (response.data && response.data.length > 0) {
                    setQuotations(response.data);
                } else {
                    setMessage('No quotations available.');
                }
            } catch (error) {
                console.error('Error fetching quotations:', error);
                setMessage('Error fetching quotations.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuotations();
    }, []);

    const handleDelete = async (quotationId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found, please log in again.');
            }

            await axios.delete(`http://localhost:8282/vendor/deletequote/${quotationId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Update state by filtering out the deleted quotation
            setQuotations((prevQuotations) => prevQuotations.filter((q) => q.id !== quotationId));
        } catch (error) {
            console.error('Error deleting quotation:', error);
            setMessage('Error deleting quotation.');
        }
    };

    const columns = [
        'Name', 'Email', 'Mobile', 'Company', 'Amount', 'Delivery Date', 'Quotation PDF', 'Actions'
    ];

    const dataWithActions = quotations.map(quotation => ({
        ...quotation,
        Actions: (
            <button 
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(quotation.id)}
            >
                Delete
            </button>
        )
    }));

    return (
        <div className="container-xl px-4 mt-4">
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
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length}>Loading...</td>
                        </tr>
                    ) : quotations.length > 0 ? (
                        dataWithActions.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>
                                        {column === 'Actions' ? row[column] : row[column] || 'N/A'}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="text-center">
                                No quotations available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default QuotationsPage;
