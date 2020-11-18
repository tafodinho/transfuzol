import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import ProfileSecion from './ProfileSection';
import MatchSection from './MatchSection';
import TransacSection from './TransacSection';
import ReferrerSection from './ReferrerSection';
import DeferralSection from './DeferralSection';

const DonorProfile = ({
    donor
}) => {
    console.log("state", donor)
    const [tab, setTab] = useState("profile")
    let content;
    switch (tab) {
        case 'profile':
            content = <ProfileSecion 
                        donor={donor}
                    />  
            break
        case 'match':
            content = <MatchSection 
                        donor={donor}
                    />
            break
        case 'transac': 
            content = <TransacSection 
                        donor={donor}
                    />
            break
        case 'referrals': 
            content = <ReferrerSection 
                        donor={donor}
                    />
            break
        case 'deferral': 
            content = <DeferralSection 
                        donor={donor}
                    />
            break
    }
    return (
        <Row className="donor-profile">
            <div className="tabs">
                <Button className={tab === "profile" ? "active" : ""} onClick={() => setTab("profile")}>Profile</Button>
                <Button className={tab === "match" ? "active" : ""} onClick={() => setTab("match")}>Match</Button>
                <Button className={tab === "transac" ? "active" : ""} onClick={() => setTab("transac")}>Trasactions</Button>
                <Button className={tab === "referrals" ? "active" : ""} onClick={() => setTab("referrals")}>Referrals</Button>
                <Button className={tab === "deferral" ? "active" : ""} onClick={() => setTab("deferral")}>Deferrals</Button>
            </div>
            <Col md="12">
                {content}
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    donor: state.donorReducer.donor,
})

export default connect(mapStateToProps)(DonorProfile);