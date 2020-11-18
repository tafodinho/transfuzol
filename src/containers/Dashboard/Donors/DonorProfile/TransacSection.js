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

const TransacSection = ({
    donor
}) => {
    const transactions = donor.donations.map(donation => (
        <tr className="donation-item">
            <td className="text-center text-muted">{donation.id}</td>
            {/* <td onClick={() => onSelectSubscriber(donation.id, 'profile')}>
               
            </td> */}
            <td className="text-center">{donation.created_at}</td>
            <td className="text-center">{donation.hospital.name}</td>
            <td className="text-center">{donation.volume_of_blood}</td>
        </tr>
    ))
    return (
        <Card className="main-card mb-3 transac-section">
            {/* {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                {state.errorMessage}
            </Alert>} */}
            <div className="card-header">Donor's Donations
                
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Done On</th>
                        <th className="text-center">Done At</th>
                        <th className="text-center">Volume</th>
                    </tr>
                    </thead>
                    <tbody>
                        {transactions}
                    </tbody>
                </table>
            </div>
            <div className="d-block text-center card-footer">
                <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">Prev</button>
                <button className="btn-wide btn btn-success">Next</button>
            </div>
        </Card>
    );
}

export default TransacSection;