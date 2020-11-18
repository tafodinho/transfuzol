import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import DetailSection from './DetailSection';
import TransacSection from './TransacSecion';

const DonationDetail = ({
    donation
}) => {
    console.log("state", donation)
    const [tab, setTab] = useState("profile")
    let content;
    switch (tab) {
        case 'profile':
            content = <DetailSection 
                        donation={donation}
                    />  
            break
        case 'transac': 
            content = <TransacSection 
                    />
            break
    }
    return (
        <Row className="donation-profile">
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
    donation: state.donationReducer.donation
})

export default connect(mapStateToProps)(DonationDetail);