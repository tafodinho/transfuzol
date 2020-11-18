import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Transfusions from './Transfusions';
import AddTransfusion from './AddTransfusion';
import TransfusionDetails from './TransfusionDetails';
import EditTransfusion from './EditTransfusion';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    transfusionsRequest,  
    addTransfusionRequest,
    getTransfusionRequest,
    editTransfusionRequest,
    deleteTransfusionRequest
} from '../../../reducers/transfusion/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transfusionList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addTransfusionEvent = this.addTransfusionEvent.bind(this)
        this.editTransfusionEvent = this.editTransfusionEvent.bind(this)
        this.deleteTransfusionEvent = this.deleteTransfusionEvent.bind(this)
    }

    componentDidMount() {
        this.props.getTransfusions({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                transfusionList: res.data.data
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

    addTransfusionEvent(e) {
        e.preventDefault()
        const { addTransfusionData: {values},  addTransfusion } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addTransfusion(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Transfusion added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Transfusion",
                    success: false
                })
            }
        })
        return false
    }

    editTransfusionEvent (e) {
        e.preventDefault()
        const { editTransfusionData: {values},  editTransfusion } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editTransfusion(values).then(res => {
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
                    errorMessage: "Failed Updating Transfusion Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteTransfusionEvent(id) {
        const { deleteTransfusion } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteTransfusion(id).then(res => {
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
                    errorMessage: "Failed Deleting Transfusion Infos",
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
                content = <Transfusions
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getTransfusion={this.props.getTransfusion}
                            deleteTransfusion={this.deleteTransfusionEvent}
                        />
                break
            case 'form':
                content = <AddTransfusion 
                            addTransfusionEvent={this.addTransfusionEvent}
                            state={this.state}
                            hospitals={this.props.hospitals}
                            patients={this.props.patients}
                        />
                break
            case 'profile':
                content = <TransfusionDetails />
                break
            case 'edit':
                content = <EditTransfusion 
                            state={this.state}
                            editTransfusion={this.editTransfusionEvent}
                            hospitals={this.props.hospitals}
                            patients={this.props.patients}
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
        addTransfusionData: state.form.addTransfusion,
        editTransfusionData: state.form.editTransfusion,
        hospitals: state.hospitalReducer.hospitals,
        patients: state.subscriberReducer.subscribers
    }
}

const mapDispatchToProps = {
    getTransfusions: transfusionsRequest,
    addTransfusion: addTransfusionRequest,
    getTransfusion: getTransfusionRequest,
    editTransfusion: editTransfusionRequest,
    deleteTransfusion: deleteTransfusionRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);