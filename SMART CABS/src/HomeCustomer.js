import { useState } from "react";
import "./login.css";
export default function Form3() {
  // States for registration
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleSource = (e) => {
    setSource(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleDestination = (e) => {
    setDestination(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (source === "" || destination === "") {
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
        <h1> successfully registered!!</h1>
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
        <h1>Search Destination</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Source</label>
        <input
          onChange={handleSource}
          className="input"
          value={source}
          type="text"
        />

        <label className="label">Destination</label>
        <input
          onChange={handleDestination}
          className="input"
          value={destination}
          type="text"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

