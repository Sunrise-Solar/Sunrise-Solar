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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
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
                                className="form-control" 
                                value={formData.Cid}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-control" 
                                value={formData.name}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input 
                                type="text" 
                                id="mobile" 
                                name="mobile" 
                                className="form-control" 
                                value={formData.mobile}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="propertyType" className="form-label">Property Type</label>
                            <input 
                                type="text" 
                                id="propertyType" 
                                name="propertyType" 
                                className="form-control" 
                                value={formData.propertyType}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                className="form-control" 
                                value={formData.address}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="electricityBill" className="form-label">Electricity Bill</label>
                            <input 
                                type="text" 
                                id="electricityBill" 
                                name="electricityBill" 
                                className="form-control" 
                                value={formData.electricityBill}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="electricityConsumption" className="form-label">Electricity Consumption</label>
                            <input 
                                type="text" 
                                id="electricityConsumption" 
                                name="electricityConsumption" 
                                className="form-control" 
                                value={formData.electricityConsumption}
                                onChange={handleChange} 
                                required 
                            />
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
