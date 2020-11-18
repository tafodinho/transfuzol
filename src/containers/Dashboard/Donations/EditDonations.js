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

let EditDonation = ({
    state,
    editDonation,
    formData,
    hospitals,
    donors
}) => {
    const [visible, setVisible] = useState(true)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (!formData.editDonation) return;
        if (!formData.editDonation.syncErrors) setNext(true);
        else setNext(false);
      }, [formData]);

    return (
        <div className="update-donation">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Edit Donation</CardTitle>
                        <form onSubmit={editDonation} >
                        <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="donor_id"
                                        id="donor_id"
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
                                        name="hospital_id"
                                        id="hospid"
                                        component={renderSelect}
                                        placeholder="Hospital"
                                    >
                                        <option></option>
                                        {hospitals.map(hospital => <option value={hospital.id}>{hospital.name}</option>)}
                                    </Field>
                                </div>
                            </div>   
                           
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="volume_of_blood"
                                        id="volumeofblood"
                                        type="number"
                                        component={renderInput}
                                        placeholder="Unit of Blood Product Collected"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="onset_time"
                                        id="onsettime"
                                        type="time"
                                        component={renderInput}
                                        placeholder="Onset Time"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="termination_time"
                                        id="terminationtime"
                                        type="time"
                                        component={renderInput}
                                        placeholder="Termination Time"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="torfru"
                                        id="torfru"
                                        type="time"
                                        component={renderInput}
                                        placeholder="Time of release from recovery unit"
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

EditDonation = reduxForm({
    form: 'editDonation', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate,
})(EditDonation);

const mapStateToProps = state => {
    const donation = state.donationReducer.donation;
    return {
        initialValues: donation,
        formData: state.form
    }
}
export default connect(mapStateToProps)(EditDonation);