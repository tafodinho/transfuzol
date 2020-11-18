import React, {useState, useEffect} from 'react';
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
} from './renderField'

import {
    medicalConditions,
    bloodTypes,
    hospitalUnits
} from '../../../utils/vars'

let AddDonation = ({
    addDonationEvent,
    state,
    formData,
    hospitals,
    donors
}) => {
    const [visible, setVisible] = useState(false);
    const [mcOthers, setMcOthers] = useState(false)

    useEffect(() => {
        console.log(formData)
        if(!formData) return
        if(!formData.values) return
        if(formData.values.medical_condition === "others") {
            setMcOthers(true)
        }
    }, [formData])

    return (
        <div className="add-donation">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Donation</CardTitle>
                        <form onSubmit={addDonationEvent} >
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

AddDonation = reduxForm({
    form: 'addDonation',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddDonation);

const mapStateToProps = state => ({
    formData: state.form.addDonation
})

export default connect(mapStateToProps)(AddDonation);