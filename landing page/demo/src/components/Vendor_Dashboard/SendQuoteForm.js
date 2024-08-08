import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SendQuoteForm.css';

const SendQuoteForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        company: '',
        amount: '',
        deliveryDate: '',
        quotationPdf: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.amount) newErrors.amount = 'Amount is required';
        else if (isNaN(formData.amount) || Number(formData.amount) <= 0) newErrors.amount = 'Amount must be a positive number';
        if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
        if (!formData.quotationPdf) newErrors.quotationPdf = 'Quotation PDF is required';
        else if (formData.quotationPdf.type !== 'application/pdf') newErrors.quotationPdf = 'Only PDF files are allowed';
        else if (formData.quotationPdf.size > 5 * 1024 * 1024) newErrors.quotationPdf = 'File size must be less than 5MB';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="mt-4">
            <h2>Send a Quote</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        isInvalid={!!errors.mobile}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.mobile}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        isInvalid={!!errors.company}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.company}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        isInvalid={!!errors.amount}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.amount}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDeliveryDate">
                    <Form.Label>Delivery Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        isInvalid={!!errors.deliveryDate}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.deliveryDate}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQuotationPdf">
                    <Form.Label>Quotation PDF</Form.Label>
                    <Form.Control
                        type="file"
                        name="quotationPdf"
                        accept=".pdf"
                        onChange={handleChange}
                        isInvalid={!!errors.quotationPdf}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.quotationPdf}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Quote
                </Button>
            </Form>
        </div>
    );
};

export default SendQuoteForm;
