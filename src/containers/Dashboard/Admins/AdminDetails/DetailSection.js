import React from 'react';
import {
    Card,
} from 'reactstrap';

import ProfilePic from '../../../../assets/images/transfuzol_avatar.png';

const ProfileSecion = ({
    transfusion
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
                    <h2>{transfusion.subscriber.first_name + " " + transfusion.subscriber.middle_name}</h2>
                    <p><span>Hospital: </span>{transfusion.hospital.name}</p>
                    <p><span>Hospitalization unit: </span>{transfusion.hosp_unit}</p>
                    <p><span>Medical condition: </span>{transfusion.medical_conditions}</p>
                </div>
            </div>
            <div className="bottom-section">
                <p><span>Diagnosis: </span>{transfusion.diagnosis}</p>
                <p><span>Date requested: </span>{transfusion.date_requested}</p>
                <p><span>Date delivered: </span>{transfusion.date_delivered}</p>
                <p><span>Blood product requested: </span>{transfusion.bp_requested}</p>
                <p><span>Blood product received: </span>{transfusion.bp_received}</p>
                <p><span>Id unit transfered: </span>{transfusion.id_ut}</p>
                <p><span>Unit of blood product tranfused: </span>{transfusion.ubpt}</p>
                <p><span>Onset time: </span>{transfusion.onset_time}</p>
                <p><span>Termination time: </span>{transfusion.termination_time}</p>
                <p><span>Hemoglobin level: </span>{transfusion.hem_level}</p>
                <p><span>Patient end status: </span>{transfusion.patient_end_status}</p>
            </div>
        </Card>
    )
}
export default ProfileSecion;