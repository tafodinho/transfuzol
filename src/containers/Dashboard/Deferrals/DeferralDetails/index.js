import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import DetailSection from './DetailSection';
import MatchSection from './MatchSection';
import TransacSection from './TransacSecion';

const DeferralDetail = ({
    deferral
}) => {
    console.log("state", deferral)
    const [tab, setTab] = useState("profile")
    let content;
    switch (tab) {
        case 'profile':
            content = <DetailSection 
                        deferral={deferral}
                    />  
            break
        case 'match':
            content = <MatchSection 
                        deferral={deferral}
                    />
            break
        case 'transac': 
            content = <TransacSection
                        
                    />
            break
    }
    return (
        <Row className="deferral-profile">
            <div className="tabs">
                <Button className={tab === "profile" ? "active" : ""} onClick={() => setTab("profile")}>Detail</Button>
                {/* <Button className={tab === "match" ? "active" : ""} onClick={() => setTab("match")}>Match</Button>
                <Button className={tab === "transac" ? "active" : ""} onClick={() => setTab("transac")}>Trasactions</Button> */}
            </div>
            <Col md="12">
                {content}
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    deferral: state.deferralReducer.deferral
})

export default connect(mapStateToProps)(DeferralDetail);