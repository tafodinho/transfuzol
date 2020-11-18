import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Admins from './Admins';
import AddAdmin from './AddAdmin';
import AdminDetails from './AdminDetails';
import EditAdmin from './EditAdmin';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    adminsRequest,  
    addAdminRequest,
    getAdminRequest,
    editAdminRequest,
    deleteAdminRequest
} from '../../../reducers/admin/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addAdminEvent = this.addAdminEvent.bind(this)
        this.editAdminEvent = this.editAdminEvent.bind(this)
        this.deleteAdminEvent = this.deleteAdminEvent.bind(this)
    }

    componentDidMount() {
        this.props.getAdmins({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                adminList: res.data.data
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

    addAdminEvent(e) {
        e.preventDefault()
        const { addAdminData: {values},  addAdmin } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addAdmin(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Admin added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Admin",
                    success: false
                })
            }
        })
        return false
    }

    editAdminEvent (e) {
        e.preventDefault()
        const { editAdminData: {values},  editAdmin } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editAdmin(values).then(res => {
            console.log("REGISTER RES", res)
            if(res.status === 200) {
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Update Success",
                    success: true,
                    section: "list"
                })
            } else {
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed Updating Admin Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteAdminEvent(id) {
        const { deleteAdmin } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteAdmin(id).then(res => {
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
                    errorMessage: "Failed Deleting Admin Infos",
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
                content = <Admins
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getAdmin={this.props.getAdmin}
                            deleteAdmin={this.deleteAdminEvent}
                        />
                break
            case 'form':
                content = <AddAdmin 
                            addAdminEvent={this.addAdminEvent}
                            state={this.state}
                            hospitals={this.props.hospitals}
                            patients={this.props.patients}
                        />
                break
            case 'profile':
                content = <AdminDetails />
                break
            case 'edit':
                content = <EditAdmin 
                            state={this.state}
                            editAdmin={this.editAdminEvent}
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
        addAdminData: state.form.addAdmin,
        editAdminData: state.form.editAdmin,
        hospitals: state.hospitalReducer.hospitals,
        patients: state.subscriberReducer.subscribers
    }
}

const mapDispatchToProps = {
    getAdmins: adminsRequest,
    addAdmin: addAdminRequest,
    getAdmin: getAdminRequest,
    editAdmin: editAdminRequest,
    deleteAdmin: deleteAdminRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);