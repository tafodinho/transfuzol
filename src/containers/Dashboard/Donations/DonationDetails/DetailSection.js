import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSecion = ({
    donation
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
                    <h2>{donation.donor.first_name + " " + donation.donor.middle_name}</h2>
                    <p><span>Done At: </span>{donation.hospital.name} Hospital</p>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Done On: </span>{donation.created_at}</p>
                <p><span>Donor: </span>{donation.donor.first_name+" "+donation.donor.middle_name}</p>
                <p><span>Onset Time: </span>{donation.onset_time}</p>
                <p><span>Termination Time: </span>{donation.termination_time}</p>
                <p><span>Onset time: </span>{donation.onset_time}</p>
                <p><span>Termination time: </span>{donation.termination_time}</p>
                <p><span>Volume of Blood Collected: </span>{donation.volume_of_blood}</p>
                <p><span>PTime of release from recovery unit: </span>{donation.torfru}</p>
            </div>
        </Card>
    )
}
export default ProfileSecion;