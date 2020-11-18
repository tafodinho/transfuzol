import React, {useState} from 'react';
import { connect } from 'react-redux';

import {
    Row, Col, Button
} from 'reactstrap';

import DetailSection from './DetailSection';
import MatchSection from './MatchSection';
import TransacSection from './TransacSecion';

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
        case 'match':
            content = <MatchSection 
                        transfusion={transfusion}
                    />
            break
        case 'transac': 
            content = <TransacSection 
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