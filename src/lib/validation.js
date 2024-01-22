export const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Name is required!";
  }else if (values.name.length < 4) {
    errors.name = "Name must be more than 4 characters";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }



  if (!values.date_of_birth) {
    errors.date_of_birth = "date is required!";
  } 
  else{
    var currentDate = new Date();
    var dateOfBirth = new Date(values.date_of_birth);
  if (dateOfBirth > currentDate) {
    errors.date_of_birth="not a possible date of birth!"
  }
  }

  
  return errors;
};


export const validate2 = (values) => {
  const errors = {};

  if (!values.Address) {
    errors.Address = "Address is required!";
  } else if (values.Address.length < 4) {
    errors.Address = "Address must be more than 4 characters";
  }

  if (!values.city) {
    errors.city = "City is required!";
  } else if (values.city.length < 3) {
    errors.city = "City must be more than 3 characters";
  }

  if (!values.state) {
    errors.state = "State is required!";
  }

  if (!values.zipcode) {
    errors.zipcode = "Zip Code is required!";
  } else if (isNaN(values.zipcode) || values.zipcode.toString().length !== 6) {
    errors.zipcode = "Please enter a valid 6-digit Zip Code";
  }

  return errors;
};

export const validate3 = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required!";
  }else if (values.name.length < 4) {
    errors.name = "Name must be more than 4 characters";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required!";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match!";
  }

  return errors;
}
