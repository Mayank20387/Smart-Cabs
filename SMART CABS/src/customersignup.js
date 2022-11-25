import { useState } from "react";
import "./signup.css";
function Form1() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [address, setaddress] = useState("");

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
  const handleaddress = (e) => {
    setaddress(e.target.value);
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
      address === ""
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
        <h1>Customer Registration</h1>
        <img
          src="https://olacabs.com/webstatic/img/ola-drive/convenient.jpg"
          width="250"
          height="180"
        />
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
        <label className="label">Address</label>
        <input
          onChange={handleaddress}
          className="input"
          value={address}
          type="text"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form1;
// export Form1;
// const { createPool } = require("mysql");
//       const pool1 = createPool({
//         host: "localhost",
//         user: "root",
//         password: "mayank",
//         database: "ola2"
//       });
//       //`insert into driver Values('adb',"Male","9811234567","adada","f3","adadad@gmail")`,
//       pool1.query(
//         `insert into customer(c_name,c_phone,address,c_email,c_password) Values("adb","Male","9811234567","adada","f3","adadad@gmail")`,
//         function (err, result, fields) {
//           if (err) {
//             return console.log(err);
//           }
//           return console.log(result);
//         }
//       );