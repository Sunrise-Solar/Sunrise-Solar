import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Contact.css'; // Optional: For additional custom styling

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center display-4 font-weight-bold text-primary">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card mb-4 shadow-lg border-light">
            <div className="card-body">
              <h4 className="card-title text-primary">Vaishnavi Sakhare</h4>
              <p className="card-text">
                <strong>Email:</strong> <a href="mailto:john.doe@sunrisesolar.com" className="text-dark">Vaishnavi@sunrisesolar.com</a><br />
                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-dark">(123) 456-7890</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-4 shadow-lg border-light">
            <div className="card-body">
              <h4 className="card-title text-primary">Tanmay Mahamuni</h4>
              <p className="card-text">
                <strong>Email:</strong> <a href="mailto:jane.smith@sunrisesolar.com" className="text-dark">Tanmay@sunrisesolar.com</a><br />
                <strong>Phone:</strong> <a href="tel:+0987654321" className="text-dark">(098) 765-4321</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-4 shadow-lg border-light">
            <div className="card-body">
              <h4 className="card-title text-primary">Pratik Gavali</h4>
              <p className="card-text">
                <strong>Email:</strong> <a href="mailto:alice.johnson@sunrisesolar.com" className="text-dark">pratik@sunrisesolar.com</a><br />
                <strong>Phone:</strong> <a href="tel:+1122334455" className="text-dark">(112) 233-4455</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-4 shadow-lg border-light">
            <div className="card-body">
              <h4 className="card-title text-primary">Shivam Gade</h4>
              <p className="card-text">
                <strong>Email:</strong> <a href="mailto:bob.williams@sunrisesolar.com" className="text-dark">shivam@sunrisesolar.com</a><br />
                <strong>Phone:</strong> <a href="tel:+1223344556" className="text-dark">(122) 334-4556</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
