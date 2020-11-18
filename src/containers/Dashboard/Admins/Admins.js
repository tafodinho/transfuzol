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

const Admins = ({
    adminList,
    changeSection,
    state,
    getAdmin,
    deleteAdmin
}) => {
    const [visible, setVisible] = useState(false)
    const onSelectAdmin = (id, view) => {
        getAdmin(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.adminList)
    }, [state])

    const admins = adminList.map(admin => (
        <tr className="admin-item">
            {/* <td onClick={() => onSelectAdmin(admin.id, 'profile')}>
                
            </td> */}
            <td className="text-center">{admin.name}</td>
            <td className="text-center">
                {admin.email}
            </td>
            <td className="text-center">{admin.created_at}</td>
            <td className="text-center">
            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => onSelectAdmin(admin.id, 'edit')}>edit</DropdownItem>
                    <DropdownItem onClick={() => deleteAdmin(admin.id)}>delete</DropdownItem>
                    <DropdownItem>Deactivate</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="admins">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Admins
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Admin</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Username</th>
                                    <th className="text-center">Created On</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {admins}
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
        adminList: state.adminReducer.admins
    }
}

export default connect(mapStateToProps)(Admins);