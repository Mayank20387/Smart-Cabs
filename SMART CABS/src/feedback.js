// import React from "react";
// import logo from "./logo.svg";
// import FeedBack from "react-feedback-popup";
// import "./App.css";

// function App3() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <FeedBack
//         style={{ zIndex: "2", marginLeft: "20px", position: "fixed" }}
//         position="left"
//         numberOfStars={5}
//         headerText="SUBMIT YOUR FEEDBACK"
//         bodyText="Custom Body test"
//         buttonText="FEEDBACK"
//         handleClose={() => console.log("handleclose")}
//         handleSubmit={(data) =>
//           fetch("xxxxxx", {
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json"
//             },
//             method: "POST", // or 'PUT'
//             body: JSON.stringify(data)
//           })
//             .then((response) => {
//               if (!response.ok) {
//                 return Promise.reject(
//                   "Our servers are having issues! We couldn't send your feedback!"
//                 );
//               }
//               response.json();
//             })
//             .then(() => {
//               alert("Success!");
//             })
//             .catch((error) => {
//               alert(
//                 "Our servers are having issues! We couldn't send your feedback!",
//                 error
//               );
//             })
//         }
//         handleButtonClick={() => console.log("handleButtonClick")}
//       />
//     </div>
//   );
// }

// export default App3;
import React, { useState } from "react";
import "./App.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
//Star Rating and other modules
import { Rate, Form, Input, Button } from "antd";
import "antd/dist/antd.css";
class App3 extends React.Component {
  render() {
    //Form with star rating
    const { TextArea } = Input;
    const Demo = () => {
      return (
        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item
            label="Messgae"
            name="Message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Rating" name="Rating">
            <Rate allowHalf defaultValue={2.5} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
      <div className="MainDiv">
        <div className="jumbotron text-center">
          <h3>
            THANK YOU FOR USING OUR WEBSITE<br></br>FEEDBACK FORM
          </h3>
        </div>

        <div className="container">
          <Demo />
        </div>
      </div>
    );
  }
}
export default App3;
// const { createPool } = require("mysql");
//       const pool1 = createPool({
//         host: "localhost",
//         user: "root",
//         password: "mayank",
//         database: "ola2"
//       });
//       pool1.query(
//         `insert into feedback(message,cus_email,stars) Values(Message,Email,Rating)`,
//         function (err, result, fields) {
//           if (err) {
//             return console.log(err);
//           }
//           return console.log(result);
//         }
//       );
