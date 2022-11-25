import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Form3 from "./HomeCustomer";
import Form1 from "./customersignup";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
function App1() {
  const navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dlogin, setdlogin] = useState(false);
  const [clogin, setclogin] = useState(false);
  const handleOnChanged = () => {
    setdlogin(!dlogin);
  };
  const handleOnChangec = () => {
    setclogin(!clogin);
  };
  // User Login info
  const database = [
    {
      Name: "user1",
      password: "pass1"
    },
    {
      Name: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid Name",
    pass: "invalid password"
  };
  this.selladd = () => {};

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.Name === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Name not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleSignUp = (event) => {
    //Prevent page reload
    event.preventDefault();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="dlogin">
          <input
            type="checkbox"
            id="dlogin"
            name="Driver Login"
            value="Driver Login"
          />
          Driver login
        </div>
        <div className="clogin">
          <input
            type="checkbox"
            id="clogin"
            name="Customer Login"
            value="Driver Login"
          />
          Customer login
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      <button className="button" onClick={() => navigate("/customersignup")}>
        Sign Up
      </button>
    </div>
  );
}
export default App1;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App1 />, rootElement);
