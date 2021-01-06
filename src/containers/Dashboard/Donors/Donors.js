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

const Donors = ({
    donorList,
    changeSection,
    state,
    getDonor,
    deleteDonor
}) => {
    const [visible, setVisible] = useState(true)
    const [tableData, setTableData] = useState(donorList)
    let tableFilterNode = useRef(null)
    const  _filterUpdated = (newData, filtersObject) => {
        setTableData(newData);
    }

    useEffect(() => {
        console.log("DONORLIST", donorList)
        tableFilterNode.reset(donorList, true);
        setTableData(donorList)
    }, [donorList])

    const onSelectDonor = (id, view) => { 
        getDonor(id)
        changeSection(view)
    }


    

    const donors = tableData.map((donor, index) => (
        <tr className="donor-item" key={'row_'+index}>
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
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover" style={{marginBottom: "250px"}}>
                                <thead>
                                <TableFilter
                                    rows={donorList}
                                    onFilterUpdate={_filterUpdated}
                                    ref={ (node) => {tableFilterNode = node}}
                                    >
                                    <th key="id" filterkey="id" casesensitive={'true'} showsearch={'true'}>
                                        Id
                                    </th>
                                    <th key="name" filterkey="first_name" className="cell">
                                        Name
                                    </th>
                                    <th key="city" filterkey="city" className="cell" alignleft={'true'}>
                                        City
                                    </th>
                                    <th key="status" filterkey="status" className="cell">
                                        Status
                                    </th>
                                    <th key="actions" filterkey="actions" className="cell">
                                        Actions
                                    </th>
                                </TableFilter>
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