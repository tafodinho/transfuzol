/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
    FormGroup, 
    Label,
    Input,
    Select
} from 'reactstrap';

const renderInput = ({
  input, placeholder, type, id, meta: { touched, error, visited },
}) => {
    return (
        <FormGroup>
            <Label for={id}>{placeholder}</Label>
            <input 
                {...input}
                type={type}
                id={id}
                placeholder={placeholder} 
                className={touched && error ? 'form-control error-outline' : (!touched ? 'form-control' : 'form-control success-outline')}
            />
        </FormGroup>
    );
}

const renderSelect = ({
    input, type, placeholder, meta: { touched, error, visited }, children,
  }) => {
    return (
        <FormGroup>
            <Label for={input.id}>{placeholder}</Label>
            <select 
                {...input}
                id={input.id}
                className={touched && error ? 'form-control error-outline' : (!touched ? 'form-control' : 'form-control success-outline')}
            >
                {children}
            </select>
        </FormGroup>
    );
}

const renderTextarea = ({
    input, type, placeholder, meta: { touched, error, visited }, children,
  }) => {
    return (
        <FormGroup>
            <Label for={input.id}>{placeholder}</Label>
            <textarea 
                {...input}
                id={input.id}
                className={touched && error ? 'form-control error-outline' : (!touched ? 'form-control' : 'form-control success-outline')}
            />
        </FormGroup>
    );
}

export {
    renderInput,
    renderSelect,
    renderTextarea
};
