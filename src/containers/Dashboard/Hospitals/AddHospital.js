import React, {useState} from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    Button, Alert, 
    Spinner, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import {validate} from './validate'
import {renderInput} from './renderField'

let AddHospital = ({
    addHospitalEvent,
    state
}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="add-hospital">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Hospital</CardTitle>
                        <form onSubmit={addHospitalEvent} >
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="name"
                                        id="name"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Hospital Name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="city"
                                        id="city"
                                        type="text"
                                        component={renderInput}
                                        placeholder="City"
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
                                        name="address"
                                        id="address"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Address"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="unit_blood_pile"
                                        id="bpunit"
                                        type="number"
                                        component={renderInput}
                                        placeholder="Unit Blood Pile"
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

AddHospital = reduxForm({
    form: 'addHospital',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddHospital);

export default AddHospital;