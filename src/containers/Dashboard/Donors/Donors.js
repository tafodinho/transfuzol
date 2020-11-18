import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col,
    Card,
    UncontrolledButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Alert
} from 'reactstrap';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import { useEffect } from 'react';

const Donors = ({
    donorList,
    changeSection,
    state,
    getDonor,
    deleteDonor
}) => {
    const [visible, setVisible] = useState(true)
    const onSelectDonor = (id, view) => {
        getDonor(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.donorList)
    }, [state])

    const donors = donorList.map(donor => (
        <tr className="donor-item">
            <td className="text-center text-muted">{donor.sn}</td>
            <td onClick={() => onSelectDonor(donor.id, 'profile')}>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        {/* <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                            </div>
                        </div> */}
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{donor.first_name + " " + donor.middle_name}</div>
                            {/* <div className="widget-subheading opacity-7">Web Developer</div> */}
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">{donor.city}</td>
            <td className="text-center">
                <div className={donor.active ? "badge badge-success" : "badge badge-danger"}>{donor.active ? "active" : "deactivated"}</div>
            </td>
            <td className="text-center">
            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => onSelectDonor(donor.id, 'edit')}>edit</DropdownItem>
                    <DropdownItem onClick={() => deleteDonor(donor.id)}>delete</DropdownItem>
                    <DropdownItem>Deactivate</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="donors">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Donors
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Donor</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">Id</th>
                                    <th>Name</th>
                                    <th className="text-center">City</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {donors}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-block text-center card-footer">
                            <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">Prev</button>
                            <button className="btn-wide btn btn-success">Next</button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        donorList: state.donorReducer.donors
    }
}

export default connect(mapStateToProps)(Donors);