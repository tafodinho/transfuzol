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

let AddDeferral = ({
    addDeferralEvent,
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
        <div className="add-deferral">
            <Col md="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        {state.errorMessage && <Alert color={state.success ? "success" : "danger"} isOpen={visible} toggle={() => setVisible(prev => !prev)}>
                            {state.errorMessage}
                        </Alert>}
                        <CardTitle>Add Deferral</CardTitle>
                        <form onSubmit={addDeferralEvent} >
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

AddDeferral = reduxForm({
    form: 'addDeferral',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate,
})(AddDeferral);

const mapStateToProps = state => ({
    formData: state.form.addDeferral
})

export default connect(mapStateToProps)(AddDeferral);