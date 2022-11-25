import "./styles.css";
import react from "react";
import App1 from "./login";
import {BrowserRouter as  Router,Routes,Route,useNavigate} from 'react-router-dom';
// import login from "./login";
// import Map from "./Map";
import Form1 from './customersignup';
export default function App() {
  return(<div className='div1'>
    <div>
      <Router>
        <Routes>
          <Route path ='/customersignup' element ={<Form1/>}/>
          </Routes>
          </Router>
      </div>
      </div>)
};