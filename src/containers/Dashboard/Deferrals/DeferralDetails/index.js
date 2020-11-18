import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import DetailSection from './DetailSection';

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