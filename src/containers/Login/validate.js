const validate = (values) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be at least 8 characters';
    } else if (!/[A-Z]+/.test(values.password)) {
      errors.password = 'Password must contain at least one caps';
    } else if (!/[0-9]+/.test(values.password)) {
      errors.password = 'Password must contain at least one digit';
    }
    return errors;
  };
  
  export default validate;