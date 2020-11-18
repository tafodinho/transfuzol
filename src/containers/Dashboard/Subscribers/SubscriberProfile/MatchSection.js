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

const MatchSection = ({
    subscriber
}) => {
    const matches = subscriber.match.map(donor => (
        <tr className="subscriber-item">
            <td className="text-center text-muted">{donor.sn}</td>
            <td>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        {/* <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                            </div>
                        </div> */}
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{donor.first_name + " " + donor.last_name}</div>
                            {/* <div className="widget-subheading opacity-7">Web Developer</div> */}
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{donor.city}</td>
            <td className="text-center">{donor.blood_group}</td>
            <td className="text-center">{donor.phone1}</td>
            <div className={donor.active ? "badge badge-success" : "badge badge-danger"}>{donor.active ? "active" : "deactivated"}</div>
        </tr>
    ))
    
    return (
        <Card className="main-card mb-3 match-section">
            <div className="card-header">Matching Donors
            </div>
            <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                        <th className="text-center"></th>
                        <th>Name</th>
                        <th className="text-center">City</th>
                        <th className="text-center">Blood Group</th>
                        <th className="text-center">phone</th>
                        <th className="text-center">status</th>
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

export default MatchSection;