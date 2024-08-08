import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RequestForm = () => {
    const [formData, setFormData] = useState({
        Cid: '',
        name: '',
        email: '',
        mobile: '',
        propertyType: '',
        address: '',
        electricityBill: '',
        electricityConsumption: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.Cid) newErrors.Cid = 'Cid is required';
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
        if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.electricityBill || isNaN(formData.electricityBill)) newErrors.electricityBill = 'Valid electricity bill amount is required';
        if (!formData.electricityConsumption || isNaN(formData.electricityConsumption)) newErrors.electricityConsumption = 'Valid electricity consumption is required';

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

    return (
        <div className="container-xl px-4 mt-4">
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Request Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Cid" className="form-label">Cid (FK)</label>
                            <input 
                                type="text" 
                                id="Cid" 
                                name="Cid" 
                                className={`form-control ${errors.Cid ? 'is-invalid' : ''}`} 
                                value={formData.Cid}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.Cid && <div className="invalid-feedback">{errors.Cid}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                value={formData.name}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input 
                                type="text" 
                                id="mobile" 
                                name="mobile" 
                                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} 
                                value={formData.mobile}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="propertyType" className="form-label">Property Type</label>
                            <input 
                                type="text" 
                                id="propertyType" 
                                name="propertyType" 
                                className={`form-control ${errors.propertyType ? 'is-invalid' : ''}`} 
                                value={formData.propertyType}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.propertyType && <div className="invalid-feedback">{errors.propertyType}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
                                value={formData.address}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="electricityBill" className="form-label">Electricity Bill</label>
                            <input 
                                type="text" 
                                id="electricityBill" 
                                name="electricityBill" 
                                className={`form-control ${errors.electricityBill ? 'is-invalid' : ''}`} 
                                value={formData.electricityBill}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.electricityBill && <div className="invalid-feedback">{errors.electricityBill}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="electricityConsumption" className="form-label">Electricity Consumption</label>
                            <input 
                                type="text" 
                                id="electricityConsumption" 
                                name="electricityConsumption" 
                                className={`form-control ${errors.electricityConsumption ? 'is-invalid' : ''}`} 
                                value={formData.electricityConsumption}
                                onChange={handleChange} 
                                required 
                            />
                            {errors.electricityConsumption && <div className="invalid-feedback">{errors.electricityConsumption}</div>}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                onClick={() => window.history.back()} // Navigate back to the previous page
                            >
                                Back
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestForm;
