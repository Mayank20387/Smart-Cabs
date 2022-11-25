import { useState } from "react";
import "./signup.css";
export default function Form1() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [drving_license, setDriving_license] = useState("");
  const [gender, setGender] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
  const handleDriving_license = (e) => {
    setDriving_license(e.target.value);
    setSubmitted(false);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      Phone === "" ||
      drving_license === "" ||
      gender === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none"
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none"
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Driver Registration</h1>
        <img src="https://olacabs.com/webstatic/img/service-type/ola-outstation-active.svg" />
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <label className="label">Phone</label>
        <input
          onChange={handlePhone}
          className="input"
          value={Phone}
          type="text"
        />
        <label className="label">Driving License</label>
        <input
          onChange={handleDriving_license}
          className="input"
          value={drving_license}
          type="text"
        />
        <label className="label">Gender</label>
        <input
          onChange={handleGender}
          className="input"
          value={gender}
          type="text"
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// const { createPool } = require("mysql");
//       const pool1 = createPool({
//         host: "localhost",
//         user: "root",
//         password: "mayank",
//         database: "ola2"
//       });
//       pool1.query(
//         `insert into driver(d_name,gender,d_phone,d_password,driving_liscense,d_email) Values("name","gender","Phone","password","driving_liscense","email")`,
//         function (err, result, fields) {
//           if (err) {
//             return console.log(err);
//           }
//           return console.log(result);
//         }
//       );
