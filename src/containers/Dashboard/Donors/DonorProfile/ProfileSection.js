import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSection = ({
    donor
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
                    <h2>{`${donor.first_name} ${donor.middle_name} ${donor.last_name}`}<span className={donor.status}>{donor.status}</span></h2>
                    <h5 className="address">{`${donor.home_address}, ${donor.city}`}</h5>
                    <p className="email"><span>Email:</span>{`${donor.email}`}</p>
                    <div className="contact">
                        <p><span>Tel1: </span>{`${donor.phone1}`}</p>
                        <p><span>Tel2: </span>{`${donor.phone2}`}</p>
                    </div>
                    <p><span>Date of Birth: </span>{`${donor.dob}`}</p>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Gender: </span>{`${donor.gender}`}</p>
                <p><span>Registered At: </span>{`${donor.done_at.name}`}</p>
                <p><span>Referrer: </span>{donor.referrer.first_name+" "+donor.referrer.middle_name}</p>
                <p><span>Last Date of Blood Doanation: </span>{`${donor.dolbd}`}</p>
                <p><span>Next Eligible Date for Donation: </span>{donor.ndefbd}</p>
                <p><span>ID Card Number: </span>{`${donor.cni}`}</p>
                <p><span>ID Place of Issue </span>{`${donor.cni_poi}`}</p>
                <p><span>ID Date of Issue </span>{`${donor.cni_doi}`}</p>
                <h1>MEDICAL INFORMATION</h1>
                <p><span>Blood Group: </span>{`${donor.blood_group}`}</p>
                <p><span>Rhesus Factor: </span>{`${donor.rhesus_factor}`}</p>
                <p><span>Allergies: </span>{donor.allergies}</p>
                <p><span>Medical Conditions: </span>{donor.medical_conditions}</p>
                <p><span>Current medications: </span>{donor.current_medications}</p>
            </div>
        </Card>
    )
}
export default ProfileSection;