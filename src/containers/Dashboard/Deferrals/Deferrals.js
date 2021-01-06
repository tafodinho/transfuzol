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

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import { useEffect } from 'react';

const Deferrals = ({
    deferralList,
    changeSection,
    state,
    getDeferral,
    deleteDeferral
}) => {
    const [visible, setVisible] = useState(true)
    const [tableData, setTableData] = useState(deferralList)
    let tableFilterNode = useRef(null)
    const  _filterUpdated = (newData, filtersObject) => {
        setTableData(newData);
    }
    useEffect(() => {
        console.log("DONORLIST", deferralList)
        tableFilterNode.reset(deferralList, true);
        setTableData(deferralList)
    }, [deferralList])

    const onSelectDeferral = (id, view) => {
        getDeferral(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.deferralList)
    }, [state])

    const deferrals = tableData.map(deferral => (
        <tr className="deferral-item">
            {/* <td onClick={() => onSelectDeferral(deferral.id, 'profile')}>
                
            </td> */}
            <td className="text-center" onClick={() => onSelectDeferral(deferral.id, 'profile')}>
                {deferral.donor.first_name + " " + deferral.donor.last_name}
            </td>
            <td className="text-center">{deferral.reason}</td>
            <td className="text-center">{deferral.created_at}</td>
            <td className="text-center">
                <UncontrolledButtonDropdown direction="right">
                    <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                        Actions
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => onSelectDeferral(deferral.id, 'edit')}>edit</DropdownItem>
                        <DropdownItem onClick={() => deleteDeferral(deferral.id)}>delete</DropdownItem>
                        <DropdownItem>Deactivate</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="deferrals">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Deferrals
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Deferral</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <TableFilter
                                        rows={deferralList}
                                        onFilterUpdate={_filterUpdated}
                                        ref={ (node) => {tableFilterNode = node}}
                                    >
                                        <th key="donor" filterkey="donor.first_name" className="cell">
                                            Donor
                                        </th>
                                        <th key="done_at" filterkey="hospital.name" className="cell">
                                            Done At
                                        </th>
                                        <th key="actions" filterkey="actions" className="cell">
                                            Actions
                                        </th>
                                    </TableFilter>
                                {/* <tr>
                                    <th className="text-center">Donor</th>
                                    <th className="text-center">Reason</th>
                                    <th className="text-center">Done On</th>
                                    <th className="text-center">Actions</th>
                                </tr> */}
                                </thead>
                                <tbody>
                                    {deferrals}
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
        deferralList: state.deferralReducer.deferrals
    }
}

export default connect(mapStateToProps)(Deferrals);