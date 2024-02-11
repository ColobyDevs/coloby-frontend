import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Company from "./components/company/Company";
import Works from "./components/works/Works";
// import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Waitlist from "./components/waitlist/Waitlist";
import Integration from "./components/integration/Integration";
import Features from "./components/features/Features";
import Why from "./components/why/Why";

const App = () => {
  return (
    <>
      <Navbar />
      <Design />
      <Company />
      <Integration />
      <Features />
      <Why />

      {/*
      <Works />
      <Testimonials />
      <Footer /> */}
      {/* <Waitlist /> */}
      {/* <Login /> */}
    </>
  );
};

export default App;
