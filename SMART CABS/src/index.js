import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import App1 from "./login";
import App3 from "./feedback";
import Form from "./customersignup";
import Form1 from "./driversignup";
import Form2 from "./vehiclepage";
import Form3 from "./HomeCustomer";
import App5 from "./onlinepay";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
ReactDOM.render(<App />, rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}

      <App1 />
    </BrowserRouter>
  </StrictMode>
);
