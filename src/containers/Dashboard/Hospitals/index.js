import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Hospitals from './Hospitals';
import AddHospital from './AddHospital';
import HospitalProfile from './HospitalProfile';
import EditHospital from './EditHospital';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    hospitalsRequest,  
    addHospitalRequest,
    getHospitalRequest,
    editHospitalRequest,
    deleteHospitalRequest
} from '../../../reducers/hospital/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addHospitalEvent = this.addHospitalEvent.bind(this)
        this.editHospitalEvent = this.editHospitalEvent.bind(this)
        this.deleteHospitalEvent = this.deleteHospitalEvent.bind(this)
    }

    componentDidMount() {
        this.props.getHospitals({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                hospitalList: res.data.data
            })
        }).catch(err => {
            console.log("RES", err)
        })
    }

    componentDidUpdate() {

    }

    onChangeSection(section) {
        this.setState({
            ...this.state,
            section: section
        })
    }

    addHospitalEvent(e) {
        e.preventDefault()
        const { addHospitalData: {values},  addHospital } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addHospital(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Hospital added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Hospital",
                    success: false
                })
            }
        })
        return false
    }

    editHospitalEvent (e) {
        e.preventDefault()
        const { editHospitalData: {values},  editHospital } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editHospital(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Update Success",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed Updating Hospital Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteHospitalEvent(id) {
        const { deleteHospital } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteHospital(id).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Delete Success",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed Deleting Hospital Infos",
                    success: false
                })
            }
        })
        return false
    }

    render() {
        let content = ""
        switch(this.state.section) {
            case 'list':
                content = <Hospitals
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getHospital={this.props.getHospital}
                            deleteHospital={this.deleteHospitalEvent}
                        />
                break
            case 'form':
                content = <AddHospital 
                            addHospitalEvent={this.addHospitalEvent}
                            state={this.state}
                        />
                break
            case 'profile':
                content = <HospitalProfile />
                break
            case 'edit':
                content = <EditHospital 
                            state={this.state}
                            editHospital={this.editHospitalEvent}
                        />
                break
        }
        return (
            <Fragment>
                <AppHeader/>
                <div className="app-main">
                    <AppSidebar/>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            {content}
                            {/* <Route path={`${match.url}/basic`} component={BasicDashboard}/> */}
                        </div>
                        <AppFooter/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        addHospitalData: state.form.addHospital,
        editHospitalData: state.form.editHospital,
    }
}

const mapDispatchToProps = {
    getHospitals: hospitalsRequest,
    addHospital: addHospitalRequest,
    getHospital: getHospitalRequest,
    editHospital: editHospitalRequest,
    deleteHospital: deleteHospitalRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);