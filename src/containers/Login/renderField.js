/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({
  input, type, placeholder, label, meta: { touched, error },
}) => (
  <div className="input-field">
    <div className="field-column">
      <input {...input} type={type} placeholder={placeholder} className="form-control" />
      {
          (type === 'password' && input.name == 'password') && touched
            && (
            <span className={error ? 'error-message' : 'success-message'} style={{ top: '.8em' }}>
              <ion-icon name="checkmark-circle" />
            </span>
            )
        }
      {
          (input.name === 'email') && touched
            && (
            <span className={error ? 'error-message' : 'success-message'} style={{ top: '.8em' }}>
              <ion-icon name="checkmark-circle" />
            </span>
            )
        }
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.func,
  ])).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ])).isRequired,
};

export default renderField;
