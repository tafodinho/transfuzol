import React from 'react';

import {
    Row, Col,
    Card,
    UncontrolledButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Alert
} from 'reactstrap';

const DonationSection = ({
    hospital
}) => {
    const matches = hospital.donations.map(donation => (
        <tr className="hospital-item">
            <td className="text-center text-muted">{donation.donor.first_name+" "+donation.donor.middle_name}</td>
            {/* <td onClick={() => onSelectHospital(hospital.id, 'profile')}>
                
            </td> */}
            <td className="text-center">{donation.created_at}</td>
            <td className="text-center">{donation.hospital.name}</td>
            <td className="text-center">{donation.volume_of_blood}</td>
        </tr>
    ))

    return (
        <Card className="main-card mb-3 match-section">
            <div className="card-header">Matching Receivers
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th>Done On</th>
                        <th className="text-center">Done At</th>
                        <th className="text-center">Volume of Blood</th>
                    </tr>
                    </thead>
                    <tbody>
                        {matches}
                    </tbody>
                </table>
            </div>
            <div className="d-block text-center card-footer">
                <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">Prev</button>
                <button className="btn-wide btn btn-success">Next</button>
            </div>
        </Card>
    )
}

export default DonationSection;