import * as yup from "yup";

const formSchemaRegister = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is Required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required")
});

export default formSchemaRegister;
