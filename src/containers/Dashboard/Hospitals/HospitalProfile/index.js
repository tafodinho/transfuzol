import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import ProfileSection from './ProfileSection';
import DonationSection from './DonationSection';
import TransfusionSection from './TransfusionSection';

const HospitalProfile = ({
    hospital
}) => {
    console.log("state", hospital)
    const [tab, setTab] = useState("detail")
    let content;
    switch (tab) {
        case 'detail':
            content = <ProfileSection 
                        hospital={hospital}
                    />  
            break
        case 'donation':
            content = <DonationSection 
                        hospital={hospital}
                    />
            break
        case 'transfusion': 
            content = <TransfusionSection 
                        hospital={hospital}
                    />
            break
    }
    return (
        <Row className="hospital-profile">
            <div className="tabs">
                <Button className={tab === "detail" ? "active" : ""} onClick={() => setTab("detail")}>Detail</Button>
                <Button className={tab === "transfusion" ? "active" : ""} onClick={() => setTab("transfusion")}>Transfusions</Button>
                <Button className={tab === "donation" ? "active" : ""} onClick={() => setTab("donation")}>Donations</Button>
            </div>
            <Col md="12">
                {content}
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    hospital: state.hospitalReducer.hospital
})

export default connect(mapStateToProps)(HospitalProfile);