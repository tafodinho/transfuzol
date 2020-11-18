const validate = (values) => {
    const errors = {
    };
  
    if (!values.first_name) {
      errors.first_name = 'Required';
    }
    if (!values.middle_name) {
        errors.middle_name = 'Required';
    }
    if (!values.sn) {
      errors.sn = 'Required';
    }
    if (!values.home_address) {
        errors.home_address = 'Required';
    }
    if (!values.city) {
        errors.city = 'Required';
    }
    if (!values.phone1) {
        errors.home_addres = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.blood_group) {
        errors.blood_group = 'Required';
    }
    if (!values.rhesus_group) {
        errors.rhesus_group = 'Required';
    }
    if (!values.pob) {
        errors.pob = 'Required';
    }
    if (!values.dob) {
        errors.dob = 'Required';
    }
    if (!values.cni) {
        errors.cni = 'Required';
    }
    if (!values.cni_poi) {
        errors.cni_poi = 'Required';
    }
    if (!values.cni_doi) {
        errors.cni_doi = 'Required';
    }
    if (!values.gender) {
        errors.gender = 'Required';
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
  