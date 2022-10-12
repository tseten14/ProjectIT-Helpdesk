import React from "react";
import Home from "./HOME PAGE/Home.js";
import Contact from "./ContactUs Page/Contact.js";
import About from "./About Page/About.js";
import Staff from "./STAFF INFO PAGE/Staff.js";
import Login from "./Login/Login.js";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard/Dashboard.js";
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    //Edit request config
    return request;
  },
  (error) => {
    console.log("error");
    console.log(error);
    //Edit response config
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log("error from response");
    return Promise.reject(error.response);
  }
);
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}
