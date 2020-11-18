import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import ProfileSecion from './ProfileSecion';
import MatchSection from './MatchSection';
import TransacSection from './TransacSection';

const SubscriberProfile = ({
    subscriber
}) => {
    const [tab, setTab] = useState("profile")
    let content;
    switch (tab) {
        case 'profile':
            content = <ProfileSecion 
                        subscriber={subscriber}
                    />  
            break
        case 'match':
            content = <MatchSection 
                        subscriber={subscriber}
                    />
            break
        case 'transac': 
            content = <TransacSection 
                        subscriber={subscriber}
                    />
            break
    }
    return (
        <Row className="subscriber-profile">
            <div className="tabs">
                <Button className={tab === "profile" ? "active" : ""} onClick={() => setTab("profile")}>Profile</Button>
                <Button className={tab === "match" ? "active" : ""} onClick={() => setTab("match")}>Match</Button>
                <Button className={tab === "transac" ? "active" : ""} onClick={() => setTab("transac")}>Transfusions</Button>
            </div>
            <Col md="12">
                {content}
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    subscriber: state.subscriberReducer.subscriber
})

export default connect(mapStateToProps)(SubscriberProfile);