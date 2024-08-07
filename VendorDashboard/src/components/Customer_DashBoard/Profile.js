import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './Profile.css'; // Assuming you have custom CSS for styling

const Profile = () => {
    // Hardcoded profile data
    const profile = {
        firstName: 'John',
        lastName: 'Doe',
        mobile: '1234567890',
        email: 'john.doe@example.com',
        city: 'New York',
        pincode: '10001'
    };

    return (
        <div className={`container-xl px-4 mt-4 ${styles.container}`}>
            {/* Account page navigation */}
            <nav className={`nav ${styles.nav} ${styles.navBorders}`}>
                <a className={`nav-link active ms-0 ${styles.navLink}`} href="#profile">Profile</a>
            </nav>
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    {/* Profile picture card */}
                    <div className={`card mb-4 mb-xl-0 ${styles.card}`}>
                        <div className={`card-body text-center ${styles.cardBody}`}>
                            {/* Profile picture image */}
                            <img className={`img-account-profile rounded-circle mb-2 ${styles.imgAccountProfile}`} src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    {/* Account details card */}
                    <div className={`card mb-4 ${styles.card}`}>
                        <div className={`card-header ${styles.cardHeader}`}>Account Details</div>
                        <div className={`card-body ${styles.cardBody}`}>
                            <form>
                                {/* Form Group (first name) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputFirstName" type="text" placeholder="Enter your first name" value={profile.firstName} readOnly />
                                </div>
                                {/* Form Group (last name) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputLastName" type="text" placeholder="Enter your last name" value={profile.lastName} readOnly />
                                </div>
                                {/* Form Group (mobile) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputMobile">Mobile</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputMobile" type="tel" placeholder="Enter your mobile number" value={profile.mobile} readOnly />
                                </div>
                                {/* Form Group (email address) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputEmailAddress" type="email" placeholder="Enter your email address" value={profile.email} readOnly />
                                </div>
                                {/* Form Group (city) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputCity">City</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputCity" type="text" placeholder="Enter your city" value={profile.city} readOnly />
                                </div>
                                {/* Form Group (pincode) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputPincode">Pincode</label>
                                    <input className={`form-control ${styles.formControl}`} id="inputPincode" type="text" placeholder="Enter your pincode" value={profile.pincode} readOnly />
                                </div>
                                {/* Save changes button */}
                                <button className={`btn btn-primary ${styles.btnPrimary}`} type="button">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
