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

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.cName) newErrors.cName = 'Customer name is required';
        if (!formData.vName) newErrors.vName = 'Vendor name is required';
        if (!formData.company) newErrors.company = 'Company name is required';
        if (!formData.siteAddress) newErrors.siteAddress = 'Site address is required';
        if (!formData.amount || isNaN(formData.amount)) newErrors.amount = 'Valid amount is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Handle form submission logic here
        }
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
                                className={`form-control ${errors.quotationId ? 'is-invalid' : ''}`}
                                value={formData.quotationId}
                                onChange={handleChange}
                                readOnly
                            />
                            {errors.quotationId && <div className="invalid-feedback">{errors.quotationId}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cName" className="form-label">Customer Name</label>
                            <input
                                type="text"
                                id="cName"
                                name="cName"
                                className={`form-control ${errors.cName ? 'is-invalid' : ''}`}
                                value={formData.cName}
                                onChange={handleChange}
                                required
                            />
                            {errors.cName && <div className="invalid-feedback">{errors.cName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="vName" className="form-label">Vendor Name</label>
                            <input
                                type="text"
                                id="vName"
                                name="vName"
                                className={`form-control ${errors.vName ? 'is-invalid' : ''}`}
                                value={formData.vName}
                                onChange={handleChange}
                                required
                            />
                            {errors.vName && <div className="invalid-feedback">{errors.vName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="siteAddress" className="form-label">Site Address</label>
                            <input
                                type="text"
                                id="siteAddress"
                                name="siteAddress"
                                className={`form-control ${errors.siteAddress ? 'is-invalid' : ''}`}
                                value={formData.siteAddress}
                                onChange={handleChange}
                                required
                            />
                            {errors.siteAddress && <div className="invalid-feedback">{errors.siteAddress}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                value={formData.amount}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                            {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
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
