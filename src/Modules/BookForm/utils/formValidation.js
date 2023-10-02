export const nameValidation = {
    required: "Name is required",
    validate: value => value.trim() !== "" || "Name can't be just whitespace"
  };
  
  export const phoneValidation = {
    required: "Phone Number is required",
    pattern: {
      value: /^[0-9]{10,15}$/,
      message: "Please enter a valid phone number"
    }
  };
  
  export const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address"
    }
  };
  
  export const addressValidation = {
    required: "Address is required",
    validate: value => value.trim().length > 5 || "Address should be longer"
  };
  