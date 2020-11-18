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

const Transfusions = ({
    transfusionList,
    changeSection,
    state,
    getTransfusion,
    deleteTransfusion
}) => {
    const [visible, setVisible] = useState(true)
    const onSelectTransfusion = (id, view) => {
        getTransfusion(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.transfusionList)
    }, [state])

    const transfusions = transfusionList.map(transfusion => (
        <tr className="transfusion-item">
            {/* <td onClick={() => onSelectTransfusion(transfusion.id, 'profile')}>
                
            </td> */}
            <td className="text-center">{transfusion.diagnosis}</td>
            <td className="text-center" onClick={() => onSelectTransfusion(transfusion.id, 'profile')}>
                {transfusion.subscriber.first_name + " " + transfusion.subscriber.last_name}
            </td>
            <td className="text-center">{transfusion.hospital.name}</td>
            <td className="text-center">
            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => onSelectTransfusion(transfusion.id, 'edit')}>edit</DropdownItem>
                    <DropdownItem onClick={() => deleteTransfusion(transfusion.id)}>delete</DropdownItem>
                    <DropdownItem>Deactivate</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="transfusions">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Transfusions
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Transfusion</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">Diognosis</th>
                                    <th className="text-center">Patient</th>
                                    <th className="text-center">Done At</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {transfusions}
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
        transfusionList: state.transfusionReducer.transfusions
    }
}

export default connect(mapStateToProps)(Transfusions);