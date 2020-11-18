import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
    Button, Alert, 
    Spinner, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import {validate} from './validate'
import {
    renderInput,
    renderSelect,
    renderTextarea,
    renderCreatableSelect,
    renderCustumSelect
} from './renderField';

let EditDeferral = ({
    state,
    editDeferral,
    formData,
    hospitals,
    donors
}) => {
    const [visible, setVisible] = useState(true)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (!formData.editDeferral) return;
        if (!formData.editDeferral.syncErrors) setNext(true);
        else setNext(false);
      }, [formData]);

    return (
        <div className="update-deferral">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Edit Deferral</CardTitle>
                        <form onSubmit={editDeferral} >
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="donor_id"
                                        id="donorid"
                                        component={renderCustumSelect}
                                        placeholder="Donor"
                                        options={donors.map(don => ({label: don.first_name+" "+don.middle_name, value: don.id}))}
                                        isMulti={false}
                                        isSearchable={true}
                                        closeMenuOnSelect={true}
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="ndefbd"
                                        id="ndefbd"
                                        type="date"
                                        component={renderInput}
                                        placeholder="Next Date Eligible for Donation"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="reason"
                                        id="reason"
                                        component={renderTextarea}
                                        placeholder="Reason"
                                    />
                                </div>
                            </div>
                            <Button color="primary" type="submit" className="mt-1" disabled={state.loading}>
                                {state.loading && <Spinner color="secondary" /> }
                                {!state.loading ? "Sumbit" : "Adding.."}
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}

EditDeferral = reduxForm({
    form: 'editDeferral', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate,
})(EditDeferral);

const mapStateToProps = state => {
    const deferral = state.deferralReducer.deferral;
    return {
        initialValues: deferral,
        formData: state.form
    }
}
export default connect(mapStateToProps)(EditDeferral);