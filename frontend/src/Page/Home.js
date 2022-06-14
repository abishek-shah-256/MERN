import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [storagedata, setStoragedata] = useState({});

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("userLoggedIn"));
    setStoragedata(users);
  }, []);

  return (
    <div className="homeCont">
      {!storagedata ? (
        <div className="homeCont">
          <Link className="login" to="/signUp">
            Sign Up
            <div className="wave"></div>
          </Link>
          <Link className="login" to="/login">
            Login
            <div className="wave"></div>
          </Link>
        </div>
      ) : (
        <div><h2>Welcome to Home Page</h2></div>
      )}
    </div>
  );
};

export default Home;
