import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Whatwedo from "./wwd";
import Contact from "./contact";
import Listcard from "./list-card";
import Footer from "./footer";

function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Whatwedo />
          <Contact />
        </div>
      </div>
      <Listcard />
      <Footer />
    </div>
  );
}
export default Baitap2;
