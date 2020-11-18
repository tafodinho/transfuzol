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
    donor
}) => {
    const matches = donor.match.map(subscriber => (
        <tr className="subscriber-item">
            <td className="text-center text-muted">{subscriber.sn}</td>
            <td>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        {/* <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                            </div>
                        </div> */}
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{subscriber.first_name + " " + subscriber.last_name}</div>
                            {/* <div className="widget-subheading opacity-7">Web Developer</div> */}
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{subscriber.city}</td>
            <td className="text-center">{subscriber.blood_group}</td>
            <td className="text-center">{subscriber.phone1}</td>
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
                        <th className="text-center">Id</th>
                        <th>Name</th>
                        <th className="text-center">City</th>
                        <th className="text-center">Blood Group</th>
                        <th className="text-center">Phone</th>
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