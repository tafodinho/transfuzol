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
import {renderInput} from './renderField'

let EditAdmin = ({
    state,
    editAdmin,
    formData
}) => {
    const [visible, setVisible] = useState(true)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (!formData.editAdmin) return;
        if (!formData.editAdmin.syncErrors) setNext(true);
        else setNext(false);
      }, [formData]);

    return (
        <div className="update-admin">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Edit Admin</CardTitle>
                        <form onSubmit={editAdmin} >
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

EditAdmin = reduxForm({
    form: 'editAdmin', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: validate,
})(EditAdmin);

const mapStateToProps = state => {
    const admin = state.adminReducer.admin;
    return {
        initialValues: admin,
        formData: state.form
    }
}
export default connect(mapStateToProps)(EditAdmin);