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
    renderTextarea
} from './renderField'

import {
    medicalConditions,
    bloodTypes,
    hospitalUnits
} from '../../../utils/vars'

let AddAdmin = ({
    addAdminEvent,
    state,
    formData,
    hospitals,
    patients
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="add-admin">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Admin</CardTitle>
                        <form onSubmit={addAdminEvent} >
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="name"
                                        id="name"
                                        type="text"
                                        component={renderInput}
                                        placeholder="Admin Name"
                                    />
                                </div>
                                <div className="col-sm">
                                    <Field
                                        name="email"
                                        id="email"
                                        type="email"
                                        component={renderInput}
                                        placeholder="Admin Email (for login)"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <Field
                                        name="password"
                                        id="password"
                                        type="password"
                                        component={renderInput}
                                        placeholder="Enter Password"
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

AddAdmin = reduxForm({
    form: 'addAdmin',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddAdmin);

const mapStateToProps = state => ({
    formData: state.form.addAdmin
})

export default connect(mapStateToProps)(AddAdmin);