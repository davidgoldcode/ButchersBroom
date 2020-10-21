import * as yup from "yup";

const formSchemaLogin = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required")
});

export default formSchemaLogin;
