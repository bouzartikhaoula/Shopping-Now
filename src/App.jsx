import React from "react";
import Home from "./component/Pages/Home";
import TopNavbar from "./component/Header/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Product from "./component/Pages/Product";
import Contact from "./component/Pages/Contact";
import Footer from "./component/Footer/Footer";
import Detailles from "./component/Pages/Detailles";
import Bedroom from "./component/Catigories/bedroom";
import Kitchen from "./component/Catigories/Kitchen";
import Waiting from "./component/Catigories/Waiting";

const App = () => {
  return (
    <>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailles" element={<Detailles />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/waiting" element={<Waiting />} />

        <Route path="*"  element={<div className="text-center text-danger">Page not found</div>} />
      </Routes>
      <Footer/>   

    </>
  );
};

export default App;
