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

let AddTransfusion = ({
    addTransfusionEvent,
    state,
    formData,
    hospitals,
    patients
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
        <div className="add-transfusion">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Transfusion</CardTitle>
                        <form onSubmit={addTransfusionEvent} >
                            <div className="form-row">
                                <div className="col-sm">
                                <div className="col-sm">
                                    <Field
                                        name="subscriber_id"
                                        id="subscriberid"
                                        component={renderCustumSelect}
                                        placeholder="Patient"
                                        options={patients.map(don => ({label: don.first_name+" "+don.middle_name, value: don.id}))}
                                        isMulti={false}
                                        isSearchable={true}
                                        closeMenuOnSelect={true}
                                    />
                                </div>
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
                                <div className="col-sm">
                                    <Field
                                        name="hosp_unit"
                                        id="hospunit"
                                        component={renderSelect}
                                        placeholder="Hospital Unit"
                                    >
                                        {hospitalUnits.map(hu => <option>{hu}</option>)}
                                    </Field>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="diagnosis"
                                        id="diagnosis"
                                        component={renderTextarea}
                                        placeholder="Diagnosis"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                            <div className="col-sm">
                                    <Field
                                        name="medical_conditions"
                                        id="medicalcondition"
                                        component={renderCreatableSelect}
                                        placeholder="Medical Condition (type to add others)"
                                        options={medicalConditions.map(mc => ({value: mc, label: mc}))}
                                        isMulti={true}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="hem_level"
                                        id="hemlevel"
                                        type="number"
                                        component={renderInput}
                                        placeholder="Hemoglobin level (g/dl)"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="bp_requested"
                                        id="bprequested"
                                        component={renderSelect}
                                        placeholder="Blood Product Rquested"
                                    >
                                        {bloodTypes.map(bt => <option value={bt}>{bt}</option>)}
                                    </Field>
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="bp_received"
                                        id="bpreceived"
                                        component={renderSelect}
                                        placeholder="Blood Product Received"
                                    >
                                        {bloodTypes.map(bt => <option value={bt}>{bt}</option>)}
                                    </Field>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="ubpt"
                                        id="ubpt"
                                        type="number"
                                        component={renderInput}
                                        placeholder="Unit of Blood Product Transfered"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="id_ut"
                                        id="idut"
                                        type="text"
                                        component={renderInput}
                                        placeholder="ID of Unit Transfered"
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
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="effect_of_transfusion"
                                        id="effctoftransfusion"
                                        component={renderTextarea}
                                        placeholder="Effect of Transfusion"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="date_requested"
                                        id="daterequested"
                                        type="date"
                                        component={renderInput}
                                        placeholder="Date Requested"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="date_delivered"
                                        id="datedelivered"
                                        type="date"
                                        component={renderInput}
                                        placeholder="Date Delivered"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="patients_end_status"
                                        id="pateintsendstatus"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Patients End Status"
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

AddTransfusion = reduxForm({
    form: 'addTransfusion',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddTransfusion);

const mapStateToProps = state => ({
    formData: state.form.addTransfusion
})

export default connect(mapStateToProps)(AddTransfusion);