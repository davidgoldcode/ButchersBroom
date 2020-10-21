import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import * as yup from "yup";
import formSchemaLogin from "./validation/formSchemaLogin";
import axios from "axios";

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

function App() {
  const [users, setUsers] = useState([]);
  const [userValues, setUserValues] = useState(initialUserValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [funFact, setFunFact] = useState([''])

  const history = useHistory();

  const getUser = () => {
    const creds = userValues;

    axios
      .post("/api/auth", creds)
      .then(res => {
        debugger;
        localStorage.setItem("token", res.data.access_token);
        setUsers([...users, res.data]);
        history.push("/dashboard");
      })
      .catch(err => {}); // to edit
  };

  const submit = () => {
    const newUser = {
      username: userValues.username.trim(),
      password: userValues.password.trim()
    };
    getUser(newUser);
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchemaLogin, name)
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
    // <Router>
    //   <div className="App">
    //     {/* <Navigation /> */}
    //     <Switch>
    //       {/* Login component goes here */}

    //       <PrivateRoute path="/dashboard" component={Dashboard} />
    <Router>
      <Route exact path="/login">
        <Login
          submit={submit}
          inputChange={inputChange}
          values={userValues}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </Router>

    //       <Route exact path="/" component={Register} />

    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
