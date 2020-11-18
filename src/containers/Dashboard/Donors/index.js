import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Donors from './Donors';
import AddDonor from './AddDonor';
import DonorProfile from './DonorProfile';
import EditDonor from './EditDonor';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    donorsRequest,  
    addDonorRequest,
    getDonorRequest,
    editDonorRequest,
    deleteDonorRequest
} from '../../../reducers/donor/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donorList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addDonorEvent = this.addDonorEvent.bind(this)
        this.editDonorEvent = this.editDonorEvent.bind(this)
        this.deleteDonorEvent = this.deleteDonorEvent.bind(this)
    }

    componentDidMount() {
        this.props.getDonors({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                donorList: res.data.data
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

    addDonorEvent(e) {
        e.preventDefault()
        const { addDonorData: {values},  addDonor } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addDonor(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Donor added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Donor",
                    success: false
                })
            }
        })
        return false
    }

    editDonorEvent (e) {
        e.preventDefault()
        const { editDonorData: {values},  editDonor } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editDonor(values).then(res => {
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
                    errorMessage: "Failed Updating Donor Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteDonorEvent(id) {
        const { deleteDonor } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteDonor(id).then(res => {
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
                    errorMessage: "Failed Deleting Donor Infos",
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
                content = <Donors
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getDonor={this.props.getDonor}
                            deleteDonor={this.deleteDonorEvent}
                        />
                break
            case 'form':
                content = <AddDonor 
                            addDonorEvent={this.addDonorEvent}
                            state={this.state}
                            hospitals={this.props.hospitals}
                            donors={this.props.donors}
                        />
                break
            case 'profile':
                content = <DonorProfile />
                break
            case 'edit':
                content = <EditDonor 
                            state={this.state}
                            editDonor={this.editDonorEvent}
                            hospitals={this.props.hospitals}
                            donors={this.props.donors}
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
        addDonorData: state.form.addDonor,
        editDonorData: state.form.editDonor,
        hospitals: state.hospitalReducer.hospitals,
        donors: state.donorReducer.donors
    }
}

const mapDispatchToProps = {
    getDonors: donorsRequest,
    addDonor: addDonorRequest,
    getDonor: getDonorRequest,
    editDonor: editDonorRequest,
    deleteDonor: deleteDonorRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);