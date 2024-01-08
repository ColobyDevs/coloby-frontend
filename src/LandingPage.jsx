import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Design />
      <Services />
      <Works />
      <Banner />
      <Testimonials />
      <Footer />
      <Login />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
