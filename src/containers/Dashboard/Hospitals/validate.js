const validate = (values) => {
    const errors = {
    };
  
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.city) {
        errors.city = 'Required';
    }
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.unit_blood_pile) {
        errors.unit_blood_pile = 'Required';
    }

    return errors;
  };
  
//   const onboardValidate = (values) => {
//     const errors = {};
  
//     if (!values.choice) {
//       errors.choice = 'Required';
//     }
//     return errors;
//   };
  
  export {
    validate,
    // onboardValidate,
  };
  