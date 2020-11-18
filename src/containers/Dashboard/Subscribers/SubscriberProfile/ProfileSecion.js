import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSecion = ({
    subscriber
}) => {
    return (
        <Card className="main-card mb-3">
            {/* <div className="card-header">
                Active Donors
            </div> */}
            <div className="top-section">
                <div className="profile-pic">
                    <img src={ProfilePic} />
                </div>
                <div className="profile-info">
                    <h2>{`${subscriber.first_name} ${subscriber.middle_name} ${subscriber.last_name}`}</h2>
                    <h5 className="address">{`${subscriber.home_address}, ${subscriber.city}`}</h5>
                    <p className="email"><span>Email: </span>{`${subscriber.email}`}</p>
                    <div className="contact">
                        <p><span>Tel1: </span>{`${subscriber.phone1}`}</p>
                        <p><span>Tel2: </span>{`${subscriber.phone2}`}</p>
                    </div>
                    <p><span>Date of Birth: </span>{`${subscriber.dob}`}</p>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Gender: </span>{`${subscriber.gender}`}</p>
                <p><span>Registered at: </span>{subscriber.done_at.name}</p>
                <p><span>ID Card Number: </span>{`${subscriber.cni}`}</p>
                <p><span>ID Place of Issue </span>{`${subscriber.cni_poi}`}</p>
                <p><span>Id Date of Issue </span>{`${subscriber.cni_doi}`}</p>
                <h1>Medical Information</h1>
                <p><span>Blood Group: </span>{`${subscriber.blood_group}`}</p>
                <p><span>Rhesus Factor: </span>{`${subscriber.rhesus_factor}`}</p>
                <p><span>Allergies: </span>{subscriber.allergies}</p>
                <p><span>Medical Conditions: </span>{subscriber.medical_conditions}</p>
                <p><span>Current Medications: </span>{subscriber.current_medications}</p>
            </div>
        </Card>
    )
}
export default ProfileSecion;