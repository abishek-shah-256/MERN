import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Header/Navbar.js'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from './Page/Home';
import Users from './Page/Users';
import AboutUs from './Page/AboutUs';
import ContactUs from './Page/ContactUs';
import SignUp from './Page/SignUp';
import Login from './Page/Login';
import Edit from './Page/Edit';
import Dashboard from './Page/Dashboard';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Users' element={<Users/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
