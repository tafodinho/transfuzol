import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import DetailSection from './DetailSection';

const TransfusionDetail = ({
    transfusion
}) => {
    console.log("state", transfusion)
    const [tab, setTab] = useState("profile")
    let content;
    switch (tab) {
        case 'profile':
            content = <DetailSection 
                        transfusion={transfusion}
                    />  
            break
    }
    return (
        <Row className="transfusion-profile">
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
    transfusion: state.transfusionReducer.transfusion
})

export default connect(mapStateToProps)(TransfusionDetail);