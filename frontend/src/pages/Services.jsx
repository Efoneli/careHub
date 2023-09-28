import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
         <div className="container">
          <div className="xl:w-[700px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text-center">
            Delivering world-class care to everyone, everywhere. Our digital health system provides unparalleled, expert healthcare services right at your fingertips.
            </p>
          </div>    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
