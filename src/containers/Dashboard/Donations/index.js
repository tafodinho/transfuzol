import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Donations from './Donations';
import AddDonation from './AddDonations';
import DonationDetails from './DonationDetails';
import EditDonation from './EditDonations';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    donationsRequest,  
    addDonationRequest,
    getDonationRequest,
    editDonationRequest,
    deleteDonationRequest
} from '../../../reducers/donation/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addDonationEvent = this.addDonationEvent.bind(this)
        this.editDonationEvent = this.editDonationEvent.bind(this)
        this.deleteDonationEvent = this.deleteDonationEvent.bind(this)
    }

    componentDidMount() {
        this.props.getDonations({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                donationList: res.data.data
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

    addDonationEvent(e) {
        e.preventDefault()
        const { addDonationData: {values},  addDonation } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addDonation(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Donation added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Donation",
                    success: false
                })
            }
        })
        return false
    }

    editDonationEvent (e) {
        e.preventDefault()
        const { editDonationData: {values},  editDonation } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editDonation(values).then(res => {
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
                    errorMessage: "Failed Updating Donation Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteDonationEvent(id) {
        const { deleteDonation } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteDonation(id).then(res => {
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
                    errorMessage: "Failed Deleting Donation Infos",
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
                content = <Donations
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getDonation={this.props.getDonation}
                            deleteDonation={this.deleteDonationEvent}
                        />
                break
            case 'form':
                content = <AddDonation 
                            addDonationEvent={this.addDonationEvent}
                            state={this.state}
                            hospitals={this.props.hospitals}
                            donors={this.props.donors}
                        />
                break
            case 'profile':
                content = <DonationDetails />
                break
            case 'edit':
                content = <EditDonation 
                            state={this.state}
                            editDonation={this.editDonationEvent}
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
        addDonationData: state.form.addDonation,
        editDonationData: state.form.editDonation,
        hospitals: state.hospitalReducer.hospitals,
        donors: state.donorReducer.donors
    }
}

const mapDispatchToProps = {
    getDonations: donationsRequest,
    addDonation: addDonationRequest,
    getDonation: getDonationRequest,
    editDonation: editDonationRequest,
    deleteDonation: deleteDonationRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);