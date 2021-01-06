import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import TableFilter from 'react-table-filter';

import {
    Row, Col,
    Card,
    UncontrolledButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Alert
} from 'reactstrap';

import { useEffect } from 'react';

const Admins = ({
    adminList,
    changeSection,
    state,
    getAdmin,
    deleteAdmin
}) => {
    const [visible, setVisible] = useState(false)
    const [tableData, setTableData] = useState(adminList)
    let tableFilterNode = useRef(null)
    const  _filterUpdated = (newData, filtersObject) => {
        setTableData(newData);
    }
    useEffect(() => {
        console.log("DONORLIST", adminList)
        tableFilterNode.reset(adminList, true);
        setTableData(adminList)
    }, [adminList])

    const onSelectAdmin = (id, view) => {
        getAdmin(id)
        changeSection(view)
    }

    useEffect(() => {
        console.log("STATE CHANGED", state.adminList)
    }, [state])

    const admins = tableData.map(admin => (
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
                                    <TableFilter
                                        rows={adminList}
                                        onFilterUpdate={_filterUpdated}
                                        ref={ (node) => {tableFilterNode = node}}
                                    >
                                        <th key="name" filterkey="name" className="cell">
                                            Name
                                        </th>
                                        <th key="email" filterkey="email" className="cell" alignleft={'true'}>
                                            Username
                                        </th>
                                        <th key="created_on" filterkey="created_at" className="cell">
                                            Created On
                                        </th>
                                        <th key="actions" filterkey="actions" className="cell">
                                            Actions
                                        </th>
                                    </TableFilter>
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