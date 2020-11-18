/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
    FormGroup, 
    Label,
    Input,
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

const renderDate = ({
    input, type, placeholder, label, meta: { touched, error, visited },
  }) => {
      console.log("INPUT", input, type)
      return (
          <FormGroup>
              <Label for={input.id}>{placeholder}</Label>
              <input 
                  {...input}
                  type={type}
                  id={input.id}
                  placeholder={placeholder} 
                  className={touched && error ? 'form-control error-outline' : (!touched ? 'form-control' : 'form-control success-outline')}
              />
          </FormGroup>
      );
  }

export {renderInput};
