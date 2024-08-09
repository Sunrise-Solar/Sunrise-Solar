import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlaceOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { quotation } = location.state || {};

    const [isConfirming, setIsConfirming] = useState(true); // State to toggle between form and confirmation

    const handleConfirm = () => {
        // Handle order placement logic here
        console.log('Order placed:', quotation);
        setIsConfirming(false);
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="container py-4">
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Place Order</h2>
                </div>
                <div className="card-body">
                    {isConfirming ? (
                        <div>
                            <p className="lead">Are you sure you want to place the order with the following details?</p>
                            <ul>
                                <li><strong>Quotation ID:</strong> {quotation?.id}</li>
                                <li><strong>Customer Name:</strong> {quotation?.customerName}</li>
                                <li><strong>Vendor Name:</strong> {quotation?.vendorName}</li>
                                <li><strong>Company:</strong> {quotation?.company}</li>
                                <li><strong>Site Address:</strong> {quotation?.siteAddress}</li>
                                <li><strong>Amount:</strong> {quotation?.amount}</li>
                            </ul>
                            <div className="d-flex justify-content-between mt-3">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleConfirm}
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="lead">Your order has been successfully placed!</p>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => navigate('/')}
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
