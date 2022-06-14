import React from "react";
import "./Navbar.css";
import log from "./logo192.png";
import { Link } from "react-router-dom";
import api from '../../utils/api'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'



const Navbar = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({})
  
  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('userLoggedIn'))
    setData(users)
  },[])


  const logout= async()=>{
    window.localStorage.removeItem('userLoggedIn');
    const {data} = await api.get('http://localhost:5000/logout')
    navigate('/')
    window.location.reload(false)
  }

  return (
    <div>
    {data ?(

      <div className="NavContainer">
        <li>
          <Link to="/">
            <img src={log} alt="apple"/>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Users">Users Info</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li onClick={()=>{logout();}}>
        <Link to="">Logout</Link>
        </li>
      </div>
    ):(

      <div className="NavContainer">
        <li>
          <Link to="/">
            <img src={log} alt="apple"/>
          </Link>
        </li>
      </div>
    )}
     
    </div>
  );
};

export default Navbar;
