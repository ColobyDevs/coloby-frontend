import React from "react";
import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

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
    </>
  );
};

export default App;
