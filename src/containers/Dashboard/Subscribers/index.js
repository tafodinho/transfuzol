import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Subscribers from './Subscribers';
import AddSubscriber from './AddSubscriber';
import SubscriberProfile from './SubscriberProfile';
import EditSubscriber from './EditSubscriber';
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

import { 
    subscribersRequest,  
    addSubscriberRequest,
    getSubscriberRequest,
    editSubscriberRequest,
    deleteSubscriberRequest
} from '../../../reducers/subscriber/actions';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriberList: [],
            section: "list",
            loading: false,
            errorMessage: '',
            success: false,
        }
        this.onChangeSection = this.onChangeSection.bind(this)
        this.addSubscriberEvent = this.addSubscriberEvent.bind(this)
        this.editSubscriberEvent = this.editSubscriberEvent.bind(this)
        this.deleteSubscriberEvent = this.deleteSubscriberEvent.bind(this)
    }

    componentDidMount() {
        this.props.getSubscribers({}).then(res => {
            console.log("RES", res)
            this.setState({
                ...this.state,
                subscriberList: res.data.data
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

    addSubscriberEvent(e) {
        e.preventDefault()
        const { addSubscriberData: {values},  addSubscriber } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        addSubscriber(values).then(res => {
            if(res.status === 200) {
                console.log("success")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Subscriber added successfully",
                    success: true,
                    section: "list"
                })
            } else {
                console.log("failed")
                this.setState({
                    ...this.state,
                    loading: false,
                    errorMessage: "Failed adding Subscriber",
                    success: false
                })
            }
        })
        return false
    }

    editSubscriberEvent (e) {
        e.preventDefault()
        const { editSubscriberData: {values},  editSubscriber } = this.props
        console.log("data", values, this.props)
        this.setState({
            ...this.state,
            loading: true
        })
        editSubscriber(values).then(res => {
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
                    errorMessage: "Failed Updating Subscriber Infos",
                    success: false
                })
            }
        })
        return false
    }

    deleteSubscriberEvent(id) {
        const { deleteSubscriber } = this.props
        this.setState({
            ...this.state,
            loading: true
        })
        deleteSubscriber(id).then(res => {
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
                    errorMessage: "Failed Deleting Subscriber Infos",
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
                content = <Subscribers
                            changeSection={this.onChangeSection}
                            state={this.state}
                            getSubscriber={this.props.getSubscriber}
                            deleteSubscriber={this.deleteSubscriberEvent}
                        />
                break
            case 'form':
                content = <AddSubscriber
                            addSubscriberEvent={this.addSubscriberEvent}
                            state={this.state}
                            subscriber={this.props.subscriber}
                            hospitals={this.props.hospitals}
                        />
                break
            case 'profile':
                content = <SubscriberProfile />
                break
            case 'edit':
                content = <EditSubscriber
                            state={this.state}
                            editSubscriber={this.editSubscriberEvent}
                            subscriber={this.props.subscriber}
                            hospitals={this.props.hospitals}
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
        addSubscriberData: state.form.addSubscriber,
        editSubscriberData: state.form.editSubscriber,
        hospitals: state.hospitalReducer.hospitals,
        subscriber: state.donorReducer.subscriber
    }
}

const mapDispatchToProps = {
    getSubscribers: subscribersRequest,
    addSubscriber: addSubscriberRequest,
    getSubscriber: getSubscriberRequest,
    editSubscriber: editSubscriberRequest,
    deleteSubscriber: deleteSubscriberRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(index);