import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSection = ({
    hospital
}) => {
    return (
        <Card className="main-card mb-3">
            {/* <div className="card-header">
                Active Hospitals
            </div> */}
            <div className="top-section">
                <div className="profile-info">
                    <h2>{hospital.name}</h2>
                    <h5 className="address">{`${hospital.address}, ${hospital.city}`}</h5>
                    <p><span>City: </span>{`${hospital.city}`}</p>
                    <div className="contact">
                        <p><span>Tel1: </span>{`${hospital.phone1}`}</p>
                        <p><span>Tel2: </span>{`${hospital.phone2}`}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Unite Blood Pile: </span>{`${hospital.unit_blood_pile}`}</p>
            </div>
        </Card>
    )
}
export default ProfileSection;