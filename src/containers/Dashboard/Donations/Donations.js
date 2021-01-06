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

const Donations = ({
    donationList,
    changeSection,
    state,
    getDonation,
    deleteDonation
}) => {
    const [visible, setVisible] = useState(true)
    const [tableData, setTableData] = useState(donationList)
    let tableFilterNode = useRef(null)
    const  _filterUpdated = (newData, filtersObject) => {
        setTableData(newData);
    }
    useEffect(() => {
        console.log("DONORLIST", donationList)
        tableFilterNode.reset(donationList, true);
        setTableData(donationList)
    }, [donationList])

    const onSelectDonation = (id, view) => {
        getDonation(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.donationList)
    }, [state])

    const donations = tableData.map(donation => (
        <tr className="donation-item">
            {/* <td onClick={() => onSelectDonation(donation.id, 'profile')}>
                
            </td> */}
            <td className="text-center">{donation.volume_of_blood}</td>
            <td className="text-center" onClick={() => onSelectDonation(donation.id, 'profile')}>
                {donation.donor.first_name + " " + donation.donor.last_name}
            </td>
            <td className="text-center">{donation.hospital.name}</td>
            <td className="text-center">
            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => onSelectDonation(donation.id, 'edit')}>edit</DropdownItem>
                    <DropdownItem onClick={() => deleteDonation(donation.id)}>delete</DropdownItem>
                    <DropdownItem>Deactivate</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="donations">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Donations
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Donation</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <TableFilter
                                        rows={donationList}
                                        onFilterUpdate={_filterUpdated}
                                        ref={ (node) => {tableFilterNode = node}}
                                    >
                                        <th key="volume_of_blood" filterkey="volume_of_blood" className="cell">
                                            Volume of Blood
                                        </th>
                                        <th key="name" filterkey="donor.first_name" className="cell" alignleft={'true'}>
                                            Donor
                                        </th>
                                        <th key="created_on" filterkey="hospital.name" className="cell">
                                            Done At
                                        </th>
                                        <th key="actions" filterkey="actions" className="cell">
                                            Actions
                                        </th>
                                    </TableFilter>
                                {/* <tr>
                                    <th className="text-center">Volume of BLood</th>
                                    <th className="text-center">Donor</th>
                                    <th className="text-center">Done At</th>
                                    <th className="text-center">Actions</th>
                                </tr> */}
                                </thead>
                                <tbody>
                                    {donations}
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
        donationList: state.donationReducer.donations
    }
}

export default connect(mapStateToProps)(Donations);