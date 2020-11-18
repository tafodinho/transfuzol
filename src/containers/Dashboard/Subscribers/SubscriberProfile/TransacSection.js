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
    subscriber
}) => {
    const transactions = subscriber.transfusions.map(trans => (
        <tr className="subscriber-item">
            <td className="text-center text-muted">{trans.id}</td>
            <td>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        {/* <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                            </div>
                        </div> */}
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{trans.medical_condition}</div>
                            {/* <div className="widget-subheading opacity-7">Web Developer</div> */}
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{trans.hospital.name}</td>
            <td className="text-center">{trans.diagnosis}</td>
            <td className="text-center">{trans.patient_end_status}</td>
        </tr>
    ))

    return (
        <Card className="main-card mb-3 transac-section">
            {/* {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                {state.errorMessage}
            </Alert>} */}
            <div className="card-header">Subscriber's Transfusions
                
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Medical condition</th>
                        <th className="text-center">hospital</th>
                        <th className="text-center">Diognosis</th>
                        <th className="text-center">End status</th>
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