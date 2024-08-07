import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlaceOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { quotation } = location.state || {};

    const [formData, setFormData] = useState({
        quotationId: quotation?.id || '',
        cName: '',
        vName: '',
        company: quotation?.company || '',
        siteAddress: '',
        amount: quotation?.amount || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="container py-4">
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Place Order</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="quotationId" className="form-label">Quotation ID (FK)</label>
                            <input
                                type="text"
                                id="quotationId"
                                name="quotationId"
                                className="form-control"
                                value={formData.quotationId}
                                onChange={handleChange}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cName" className="form-label">Customer Name</label>
                            <input
                                type="text"
                                id="cName"
                                name="cName"
                                className="form-control"
                                value={formData.cName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="vName" className="form-label">Vendor Name</label>
                            <input
                                type="text"
                                id="vName"
                                name="vName"
                                className="form-control"
                                value={formData.vName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="form-control"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="siteAddress" className="form-label">Site Address</label>
                            <input
                                type="text"
                                id="siteAddress"
                                name="siteAddress"
                                className="form-control"
                                value={formData.siteAddress}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                className="form-control"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-between mt-3">
                            <button type="button" className="btn btn-secondary" onClick={handleBack}>
                                Back
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Submit Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
