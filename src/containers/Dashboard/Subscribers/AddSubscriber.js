import React, {useState} from 'react';
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
    bloodGroups, 
    medicalConditions 
} from '../../../utils/vars';

let AddSubscriber = ({
    addSubscriberEvent,
    state,
    subscriber,
    hospitals
}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="add-subscriber">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Subscriber</CardTitle>
                        <form onSubmit={addSubscriberEvent} >
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="sn"
                                        id="sn"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Subscriber Id"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="email"
                                        id="email"
                                        type="email"
                                        component={renderInput}
                                        placeholder="E-mail"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="hospital_id"
                                        id="hospid"
                                        component={renderSelect}
                                        placeholder="Hospital"
                                    >
                                        {hospitals.map(hospital => <option value={hospital.id}>{hospital.name}</option>)}
                                    </Field>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="first_name"
                                        id="fname"
                                        type="text"
                                        component={renderInput}
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="middle_name"
                                        id="mname"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Middle Name"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="last_name"
                                        id="lname"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="home_address"
                                        id="haddress"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Home Address"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="region"
                                        id="region"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Region"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="city"
                                        id="city"
                                        type="text"
                                        component={renderInput}
                                        placeholder="City"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="phone1"
                                        id="phone1"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Phone 1"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="phone2"
                                        id="phone2"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Phone 2"
                                    />
                                </div>
                                
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="blood_group"
                                        id="bloodgroup"
                                        component={renderSelect}
                                        placeholder="Blood Group"
                                    >
                                        {bloodGroups.map(bg => <option>{bg}</option>)}
                                    </Field>
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="rhesus_factor"
                                        id="rhesusfactor"
                                        component={renderSelect}
                                        placeholder="Rhesus Factor"
                                    >
                                        <option>D+</option>
                                        <option>D-</option>
                                    </Field>
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="gender"
                                        id="gender"
                                        component={renderSelect}
                                        placeholder="Gender"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="medical_condition"
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
                                        name="current_medications"
                                        id="currentmidications"
                                        component={renderCreatableSelect}
                                        options={[{labal: "none", value: ""}]}
                                        isMulti={true}
                                        placeholder="Current Medications (type and press enter to add)"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="allergies"
                                        id="allergies"
                                        component={renderCreatableSelect}
                                        options={[{labal: "none", value: ""}]}
                                        isMulti={true}
                                        placeholder="Allergies (type and press enter to add)"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="dob"
                                        id="dob"
                                        type="date"
                                        component={renderInput}
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="pob"
                                        id="pob"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Place of Birth"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="cni"
                                        id="cni"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Id Card Number"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="cni_doi"
                                        id="cnidoi"
                                        type="date"
                                        component={renderInput}
                                        placeholder="Id Card Date of Issue"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="cni_poi"
                                        id="cnipoi"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Id Card Place of Issue"
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

AddSubscriber = reduxForm({
    form: 'addSubscriber',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddSubscriber);

export default AddSubscriber;