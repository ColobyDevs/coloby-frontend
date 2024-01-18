import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Company from "./components/company/Company";
import Works from "./components/works/Works";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Waitlist from "./components/waitlist/Waitlist";

const App = () => {
  return (
    <>
      <Navbar />
      <Design />
      <Company />
      {/*
      <Works />
      <Banner />
      <Testimonials />
      <Footer /> */}
      {/* <Waitlist /> */}
      {/* <Login /> */}
    </>
  );
};

export default App;
