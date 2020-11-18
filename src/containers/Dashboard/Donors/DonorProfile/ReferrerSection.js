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

const ReferrerSecion = ({
    donor
}) => {
    const transactions = donor.referrees.map(referee => (
        <tr className="referee-item">
            <td className="text-center text-muted">{referee.id}</td>
            {/* <td onClick={() => onSelectSubscriber(referee.id, 'profile')}>
               
            </td> */}
            <td className="text-center">{referee.first_name + " " + referee.middle_name}</td>
            <td className="text-center">{referee.city}</td>
            <td className="text-center">{referee.phone1}</td>
        </tr>
    ))
    return (
        <Card className="main-card mb-3 transac-section">
            {/* {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                {state.errorMessage}
            </Alert>} */}
            <div className="card-header">Donor's Referrals
                
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Name</th>
                        <th className="text-center">City</th>
                        <th className="text-center">Phone</th>
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

export default ReferrerSecion;