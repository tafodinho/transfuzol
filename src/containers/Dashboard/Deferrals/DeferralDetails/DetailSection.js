import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSecion = ({
    deferral
}) => {
    return (
        <Card className="main-card mb-3">
            {/* <div className="card-header">
                Active Donors
            </div> */}
            <div className="top-section">
                {/* <div className="profile-pic">
                    <img src={ProfilePic} />
                </div> */}
                <div className="profile-info">
                    <h2>{deferral.donor.first_name + " " + deferral.donor.middle_name}</h2>
                    <p><span>Done At: </span>{deferral.hospital.name} Hospital</p>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Done On: </span>{deferral.created_at}</p>
                <p><span>Donor: </span>{deferral.donor.first_name+" "+deferral.donor.middle_name}</p>
                <p><span>Onset Time: </span>{deferral.onset_time}</p>
                <p><span>Termination Time: </span>{deferral.termination_time}</p>
                <p><span>Onset time: </span>{deferral.onset_time}</p>
                <p><span>Termination time: </span>{deferral.termination_time}</p>
                <p><span>Volume of Blood Collected: </span>{deferral.volume_of_blood}</p>
                <p><span>PTime of release from recovery unit: </span>{deferral.torfru}</p>
            </div>
        </Card>
    )
}
export default ProfileSecion;