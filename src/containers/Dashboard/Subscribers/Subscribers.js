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

const Subscribers = ({
    subscriberList,
    changeSection,
    state,
    getSubscriber,
    deleteSubscriber
}) => {
    const [visible, setVisible] = useState(true)
    const [tableData, setTableData] = useState(subscriberList)
    let tableFilterNode = useRef(null)
    const  _filterUpdated = (newData, filtersObject) => {
        setTableData(newData);
    }
    useEffect(() => {
        console.log("DONORLIST", subscriberList)
        tableFilterNode.reset(subscriberList, true);
        setTableData(subscriberList)
    }, [subscriberList])

    const onSelectSubscriber = (id, view) => {
        getSubscriber(id)
        changeSection(view)
    }
    useEffect(() => {
        console.log("STATE CHANGED", state.subscriberList)
    }, [state])

    const subscribers = tableData.map(subscriber => (
        <tr className="subscriber-item">
            <td className="text-center text-muted">{subscriber.sn}</td>
            <td onClick={() => onSelectSubscriber(subscriber.id, 'profile')}>
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
            <td className="text-center">
                <div className={subscriber.active ? "badge badge-success" : "badge badge-danger"}>{subscriber.active ? "active" : "deactivated"}</div>
            </td>
            <td className="text-center">
            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle className="btn-wide mb-2 mr-2" caret color="primary">
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => onSelectSubscriber(subscriber.id, 'edit')}>edit</DropdownItem>
                    <DropdownItem onClick={() => deleteSubscriber(subscriber.id)}>delete</DropdownItem>
                    <DropdownItem>Deactivate</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            </td>
        </tr>
    ))

    return (
        <div className="subscribers">
            <Row>
                <Col md="12">
                    <Card className="main-card mb-3">
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <div className="card-header">Active Subscribers
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-success" onClick={() => changeSection("form")}>Add Subscriber</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <TableFilter
                                        rows={subscriberList}
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
                                {/* <tr>
                                    <th className="text-center">Id</th>
                                    <th>Name</th>
                                    <th className="text-center">City</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr> */}
                                </thead>
                                <tbody>
                                    {subscribers}
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
        subscriberList: state.subscriberReducer.subscribers
    }
}

export default connect(mapStateToProps)(Subscribers);