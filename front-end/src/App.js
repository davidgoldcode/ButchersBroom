import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import * as yup from "yup";
import formSchemaLogin from "./validation/formSchemaLogin";
import formSchemaRegister from "./validation/formSchemaRegister";
import { connect } from "react-redux";
import { loginUser, registerUser } from "./store/actions/plantActions.js";

const initialUserValues = {
  username: "",
  password: "",
  email: ""
};

const initialFormErrors = {
  username: "",
  email: "",
  phone: ""
};

const initialDisabled = true;

function App({ loginUser, registerUser }) {
  const [userValues, setUserValues] = useState(initialUserValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUser = user => {
    const creds = user;
    user.email ? registerUser(creds) : loginUser(creds);
  };

  const submit = () => {
    const newUser = {
      username: userValues.username.trim(),
      email: userValues.email.trim(),
      password: userValues.password.trim()
    };
    getUser(newUser);
  };

  const inputChange = (name, value) => {
    let schema = formSchemaLogin;
    if (/email/i.test(name)) {
      schema = formSchemaRegister;
    }

    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

    setUserValues({
      ...userValues,
      [name]: value
    });
  };

  useEffect(() => {
    formSchemaLogin.isValid(userValues).then(valid => {
      setDisabled(!valid);
    });
  }, [userValues]);

  return (
    <Router>
      <Switch>
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/login">
          <Login
            submit={submit}
            inputChange={inputChange}
            values={userValues}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/register">
          <Register
            submit={submit}
            inputChange={inputChange}
            values={userValues}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  };
};

export default connect(mapStateToProps, { loginUser, registerUser })(App);
