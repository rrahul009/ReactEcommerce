import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carausel1 from "../assets/carausel11.avif";
import carausel22 from "../assets/carausel22.jpg";
import carausel33 from "../assets/carausel33.jpg";

const Carausel = () => {
  return (
    <Carousel 
    autoPlay={true} 
    infiniteLoop={true}
     showThumbs={false}
     
     >
      <div>
        <img src={carausel1} style={{ height: "500px" }} alt="loading" />
      </div>
      <div>
        <img src={carausel22} style={{ height: "500px" }}alt="loading" />
      </div>
      <div>
        <img src={carausel33} style={{ height: "500px" }} alt="loading"/>
      </div>
    </Carousel>
  );
};

export default Carausel;
