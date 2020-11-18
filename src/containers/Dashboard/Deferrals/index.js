import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Deferrals from './Deferrals';
import AddDeferral from './AddDeferrals';
import DeferralDetails from './DeferralDetails';
import EditDeferral from './EditDeferrals';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    deferralsRequest,  
    addDeferralRequest,
    getDeferralRequest,
    editDeferralRequest,
    deleteDeferralRequest
} from '../../../reducers/deferral/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deferralList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addDeferralEvent = this.addDeferralEvent.bind(this)
        this.editDeferralEvent = this.editDeferralEvent.bind(this)
        this.deleteDeferralEvent = this.deleteDeferralEvent.bind(this)
    }

    componentDidMount() {
        this.props.getDeferrals({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                deferralList: res.data.data
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

    addDeferralEvent(e) {
        e.preventDefault()
        const { addDeferralData: {values},  addDeferral } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addDeferral(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Deferral added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Deferral",
                    success: false
                })
            }
        })
        return false
    }

    editDeferralEvent (e) {
        e.preventDefault()
        const { editDeferralData: {values},  editDeferral } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editDeferral(values).then(res => {
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
                    errorMessage: "Failed Updating Deferral Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteDeferralEvent(id) {
        const { deleteDeferral } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteDeferral(id).then(res => {
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
                    errorMessage: "Failed Deleting Deferral Infos",
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
                content = <Deferrals
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getDeferral={this.props.getDeferral}
                            deleteDeferral={this.deleteDeferralEvent}
                        />
                break
            case 'form':
                content = <AddDeferral 
                            addDeferralEvent={this.addDeferralEvent}
                            state={this.state}
                            hospitals={this.props.hospitals}
                            donors={this.props.donors}
                        />
                break
            case 'profile':
                content = <DeferralDetails />
                break
            case 'edit':
                content = <EditDeferral 
                            state={this.state}
                            editDeferral={this.editDeferralEvent}
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
        addDeferralData: state.form.addDeferral,
        editDeferralData: state.form.editDeferral,
        hospitals: state.hospitalReducer.hospitals,
        donors: state.donorReducer.donors
    }
}

const mapDispatchToProps = {
    getDeferrals: deferralsRequest,
    addDeferral: addDeferralRequest,
    getDeferral: getDeferralRequest,
    editDeferral: editDeferralRequest,
    deleteDeferral: deleteDeferralRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);