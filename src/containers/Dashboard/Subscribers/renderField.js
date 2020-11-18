/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Select from 'react-select'
import {
    FormGroup, 
    Label,
    Input,
} from 'reactstrap';
import CreatableSelect from 'react-select/creatable'

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

const renderCustumSelect = ({
    input, type, placeholder, options, 
    isMulti, isSearchable, closeMenuOnSelect,
    meta: { touched, error, visited }, children,
  }) => {
      
    let value = ''
    if(input.name === 'referrer') {
        value = {label: input.value.first_name+" "+input.value.middle_name, value: input.value.id}
        console.log("INPUT", value, input);
    }
    
    return (
        <FormGroup>
            <Label for={input.id}>{placeholder}</Label>
            <Select 
                {...input}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)} 
                id={input.id}
                defaultValue={value}
                options={options}
                isMulti={isMulti}
                isSearchable={isSearchable}
                closeMenuOnSelect={closeMenuOnSelect}
                className={touched && error ? 'error-outline' : (!touched ? '' : 'success-outline')}

            />
        </FormGroup>
    );
}

const renderCreatableSelect = ({
    input, type, placeholder, options, isMulti, meta: { touched, error, visited }, children,
  }) => {
    return (
        <FormGroup>
            <Label for={input.id}>{placeholder}</Label>
            <CreatableSelect 
                {...input}
                isClearable
                isMulti={isMulti}
                closeMenuOnSelect={false}
                onChange={value => input.onChange(value)}
                // onInputChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)} 
                id={input.id}
                options={options}
                className={touched && error ? 'error-outline' : (!touched ? '' : 'success-outline')}
            />
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
    renderTextarea,
    renderCreatableSelect,
    renderCustumSelect
};