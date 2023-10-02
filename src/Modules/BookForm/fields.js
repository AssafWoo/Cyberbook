import {
  addressValidation,
  emailValidation,
  nameValidation,
  phoneValidation,
} from "./utils/formValidation";

export const returnFields = (errors) => {
  return [
    {
      name: "name",
      label: "Name",
      type: "text",
      error: errors.name,
      validation: nameValidation,
      placeholder: "Bo Katan",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      error: errors.phone,
      validation: phoneValidation,
      placeholder: "XXXXXXXXXX",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      error: errors.email,
      validation: emailValidation,
      placeholder: "BoKatan@gmail.com",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      error: errors.address,
      validation: addressValidation,
      placeholder: "Mandalore Main 12",
    },
  ];
};
