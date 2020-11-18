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

const DeferralSecion = ({
    donor
}) => {
    const transactions = donor.deferrals.map(deferral => (
        <tr className="deferral-item">
            <td className="text-center text-muted">{deferral.id}</td>
            {/* <td onClick={() => onSelectSubscriber(deferral.id, 'profile')}>
               
            </td> */}
            <td className="text-center">{deferral.created_at}</td>
            <td className="text-center">{deferral.ndefbd}</td>
            <td className="text-center">{deferral.reason}</td>
        </tr>
    ))
    return (
        <Card className="main-card mb-3 transac-section">
            {/* {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                {state.errorMessage}
            </Alert>} */}
            <div className="card-header">Donor's Deferrals
                
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Date of Diognosis</th>
                        <th className="text-center">Next Eligible Date</th>
                        <th className="text-center">Reason</th>
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

export default DeferralSecion;